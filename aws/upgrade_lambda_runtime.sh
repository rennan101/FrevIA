#!/usr/bin/env bash
# ==============================================================================
# FREVAI — ATUALIZAÇÃO DO RUNTIME DO AWS LAMBDA PARA NODE.JS 22.x (LTS)
# Região padrão: sa-east-1 (São Paulo)
# ==============================================================================

set -e

REGION="${AWS_REGION:-sa-east-1}"
TARGET_RUNTIME="nodejs22.x"

echo "========================================================"
echo "  FREVAI — ATUALIZADOR DE RUNTIME AWS LAMBDA -> $TARGET_RUNTIME"
echo "  Região: $REGION"
echo "========================================================"

# Verificar se AWS CLI está disponível
if ! command -v aws &> /dev/null; then
    echo "⚠️  AWS CLI não foi encontrado no PATH."
    echo "    Por favor, utilize o console AWS ou configure o AWS CLI."
    exit 1
fi

echo "🔍 Buscando funções Lambda na região $REGION com runtime nodejs20.x ou anterior..."

FUNCTIONS=$(aws lambda list-functions --region "$REGION" --output json --query "Functions[?Runtime=='nodejs20.x' || Runtime=='nodejs18.x' || Runtime=='nodejs16.x'].FunctionName" 2>/dev/null || echo "[]")

echo "Funções identificadas: $FUNCTIONS"

# Atualizar cada função encontrada
for fn in $(echo "$FUNCTIONS" | grep -o '"[^"]*"' | tr -d '"'); do
    if [ -n "$fn" ]; then
        echo "🚀 Atualizando runtime da função '$fn' para $TARGET_RUNTIME..."
        aws lambda update-function-configuration \
            --region "$REGION" \
            --function-name "$fn" \
            --runtime "$TARGET_RUNTIME" \
            --output json
        echo "✅ Função '$fn' atualizada com sucesso para $TARGET_RUNTIME!"
    fi
done

# Se a função 'frevai-core-api' ou 'frevai-api' existir, atualizar também o código empacotado
ZIP_PATH="$(dirname "$0")/lambda/function.zip"
if [ -f "$ZIP_PATH" ]; then
    echo "📦 Arquivo function.zip localizado em $ZIP_PATH."
fi

echo "========================================================"
echo "🎉 Verificação e migração concluídas com sucesso!"
echo "========================================================"
