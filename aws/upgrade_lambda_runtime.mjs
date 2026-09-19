// ==============================================================================
// FREVAI — ATUALIZAÇÃO DO RUNTIME DO AWS LAMBDA (NODE.JS 22.x LTS)
// ==============================================================================

import { execSync } from 'child_process';

const REGION = process.env.AWS_REGION || 'sa-east-1';
const TARGET_RUNTIME = 'nodejs22.x';

console.log(`\n========================================================`);
console.log(`  FREVAI — ATUALIZAÇÃO DE RUNTIME LAMBDA: Node.js 22.x`);
console.log(`  Região AWS: ${REGION}`);
console.log(`========================================================\n`);

try {
  console.log(`🔍 Listando funções Lambda na região ${REGION}...`);
  const output = execSync(`aws lambda list-functions --region ${REGION} --output json`, { encoding: 'utf-8' });
  const data = JSON.parse(output);
  const functions = data.Functions || [];

  const outdated = functions.filter(f => f.Runtime === 'nodejs20.x' || f.Runtime === 'nodejs18.x' || f.Runtime === 'nodejs16.x');

  if (outdated.length === 0) {
    console.log(`✅ Nenhuma função com runtime obsoleto encontrada na região ${REGION}.`);
    console.log(`   Todas as funções já estão no Node.js 22.x ou outro runtime ativo.\n`);
  } else {
    for (const fn of outdated) {
      console.log(`🚀 Atualizando função: ${fn.FunctionName} (Atual: ${fn.Runtime}) -> ${TARGET_RUNTIME}...`);
      execSync(`aws lambda update-function-configuration --region ${REGION} --function-name "${fn.FunctionName}" --runtime "${TARGET_RUNTIME}"`, { stdio: 'inherit' });
      console.log(`✅ ${fn.FunctionName} atualizada com sucesso!\n`);
    }
  }
} catch (err) {
  console.warn(`\nℹ️  Para executar via terminal local com AWS CLI configurado:`);
  console.log(`    aws lambda update-function-configuration --region ${REGION} --function-name <NOME_DA_FUNCAO> --runtime ${TARGET_RUNTIME}\n`);
}
