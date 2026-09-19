# Instruções de Atualização do AWS Lambda Runtime (Node.js 22.x LTS)

A AWS anunciou o fim do suporte (EOL) para o runtime **Node.js 20.x** no AWS Lambda em **30 de abril de 2026**.

O projeto **FrevAI** já está 100% compatível e preparado para o runtime **Node.js 22.x LTS** (`nodejs22.x`) na região **sa-east-1** (São Paulo).

---

## 🛠️ Opção 1: Atualização via Console da AWS (1 Minuto)

1. Acesse o **Console da AWS**: [https://sa-east-1.console.aws.amazon.com/lambda/](https://sa-east-1.console.aws.amazon.com/lambda/)
2. Certifique-se de que a região selecionada no canto superior direito é **América do Sul (São Paulo) / sa-east-1**.
3. Na lista de **Funções (Functions)**, clique no nome da sua função (ex: `frevai-core-api` ou similar).
4. Role até a seção **Configurações de runtime (Runtime settings)** na aba *Código (Code)*.
5. Clique no botão **Editar (Edit)**.
6. No campo **Runtime**, selecione **Node.js 22.x**.
7. Clique em **Salvar (Save)**.

---

## 💻 Opção 2: Atualização Automática via Script ou AWS CLI

Se você tiver o AWS CLI configurado localmente:

### Usando o Script Automatizado:
```bash
./aws/upgrade_lambda_runtime.sh
```

### Ou executando o comando direto do AWS CLI:
```bash
# 1. Identificar funções usando Node.js 20.x:
aws lambda list-functions --region sa-east-1 --output text --query "Functions[?Runtime=='nodejs20.x'].FunctionName"

# 2. Atualizar o runtime para Node.js 22.x:
aws lambda update-function-configuration \
    --region sa-east-1 \
    --function-name <NOME_DA_SUA_FUNCAO> \
    --runtime nodejs22.x
```

---

## 📦 Código Empacotado da Lambda

O código atualizado e compatível com Node.js 22.x encontra-se em:
- Arquivo fonte: `aws/lambda/index.mjs`
- Pacote compactado para upload: `aws/lambda/function.zip`
