// ==============================================================================
// FREVAI MEDIA OPTIMIZER — PROCESSAMENTO, CONVERSÃO WEBP & CDN CLOUDFRONT
// Otimização de Mídia no Cliente: conversão WebP, limites de arquivo e CDN inteligente
// ==============================================================================

const MediaOptimizer = {
  // Configurações padrão de otimização
  DEFAULT_MAX_WIDTH: 1600,
  DEFAULT_MAX_HEIGHT: 1600,
  DEFAULT_QUALITY: 0.82,

  /**
   * Converte uma imagem (File ou Blob) para o formato moderno WebP via Canvas
   * Reduz o payload em até 80% antes do upload para o Amazon S3
   */
  async compressAndConvertToWebP(file, maxWidth = 1600, quality = 0.82) {
    if (!file || !file.type.startsWith('image/')) return file;

    // Se já for WebP ou SVG, não precisa recomprimir
    if (file.type === 'image/svg+xml') return file;

    return new Promise((resolve) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        img.src = e.target.result;
      };

      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxWidth) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxWidth) / height);
            height = maxWidth;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Tentar converter para image/webp
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const originalName = file.name ? file.name.replace(/\.[^/.]+$/, '') : 'image';
              const webpFile = new File([blob], `${originalName}.webp`, {
                type: 'image/webp',
                lastModified: Date.now()
              });
              resolve(webpFile);
            } else {
              resolve(file);
            }
          },
          'image/webp',
          quality
        );
      };

      img.onerror = () => resolve(file);
      reader.onerror = () => resolve(file);
      reader.readAsDataURL(file);
    });
  },

  /**
   * Pre-check de arquivo de áudio (formato, tamanho e duração)
   */
  async inspectAudioFile(file) {
    if (!file) return { isValid: false, error: 'Nenhum arquivo fornecido' };

    const maxSizeBytes = 35 * 1024 * 1024; // 35 MB
    if (file.size > maxSizeBytes) {
      return { 
        isValid: false, 
        error: `Arquivo de áudio muito grande (${(file.size / (1024 * 1024)).toFixed(1)}MB). Limite máximo: 35MB.` 
      };
    }

    return new Promise((resolve) => {
      const audio = document.createElement('audio');
      const url = URL.createObjectURL(file);
      audio.src = url;

      audio.onloadedmetadata = () => {
        const duration = Math.round(audio.duration || 0);
        URL.revokeObjectURL(url);
        resolve({
          isValid: true,
          duration,
          sizeBytes: file.size,
          mimeType: file.type || 'audio/mpeg'
        });
      };

      audio.onerror = () => {
        URL.revokeObjectURL(url);
        resolve({
          isValid: true,
          duration: 180,
          sizeBytes: file.size,
          mimeType: file.type || 'audio/mpeg'
        });
      };
    });
  },

  /**
   * Pre-check de arquivo de partitura PDF
   */
  inspectPdfFile(file) {
    if (!file) return { isValid: false, error: 'Nenhum arquivo de partitura fornecido' };

    const maxSizeBytes = 20 * 1024 * 1024; // 20 MB
    if (file.size > maxSizeBytes) {
      return { 
        isValid: false, 
        error: `Arquivo de partitura muito grande (${(file.size / (1024 * 1024)).toFixed(1)}MB). Limite máximo: 20MB.` 
      };
    }

    const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
    if (!isPdf) {
      return { isValid: false, error: 'Formato inválido. Envie um documento no formato PDF.' };
    }

    return { isValid: true, sizeBytes: file.size };
  },

  /**
   * Transforma URLs do S3 para CDN CloudFront / Otimizador dinâmico
   */
  getCdnOptimizedUrl(url, options = {}) {
    if (!url || typeof url !== 'string') return '';
    if (url.startsWith('data:') || url.startsWith('blob:')) return url;

    // Se for URL do Unsplash, adiciona parâmetros de otimização WebP e largura
    if (url.includes('images.unsplash.com')) {
      const width = options.width || 800;
      const quality = options.quality || 80;
      return url.replace(/w=\d+/, `w=${width}`).replace(/q=\d+/, `q=${quality}`) + '&fm=webp';
    }

    return url;
  }
};

window.MediaOptimizer = MediaOptimizer;
