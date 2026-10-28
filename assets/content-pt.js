/* Mini_Training_5_Handling_Content_Errors - Portuguese content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pt';
const CONTENT = {
  flag:'🇧🇷', dir:'ltr',
  ui:{
    pageTitle:"Mini-Treinamento · Como Lidar com Erros na Aula — Treinamento de Tutores Kodland",
    logoSub:'Departamento de Desenvolvimento de Tutores',
    heroEyebrow:"🎯 Mini-Treinamento",
    heroTitle:"Como Manter a Aula Firme Mesmo com <span class=\"h-pill\">Erros</span>",
    heroIntro:"Você está vendo este treinamento porque uma família relatou uma aula que pareceu cheia de erros e frustração. Na maioria das vezes, isso vem de preparação, explicação ou erros reais de conteúdo — e tudo isso tem solução.",
    heroWork:"Faça 4 módulos curtos. Cada verificação de módulo exige 70% ou mais para liberar o próximo. Leva cerca de 25 a 30 minutos no total.",
    startBtn:"🚀 Começar o treinamento",
    pathLabel:'Seu caminho de aprendizado',
    devTitle:'Dev: desbloquear todos os módulos para revisão',
    backToPath:'Voltar ao caminho',
    modulesPassed:'{done} / {total} módulos concluídos',
    moduleN:'Módulo {n}',
    of:'de',
    locked:'🔒 Bloqueado',
    passedBadge:'✅ Aprovado · {pct}%',
    reviewedBadge:'✅ Revisado',
    startBadge:'▶ Começar',
    reviewBadge:'▶ Revisar',
    objective:'Objetivo',
    startCheck:'▶ Iniciar a verificação do módulo',
    finishBtn:'▶ Concluir o mini-treinamento',
    doneBack:'✓ Pronto — voltar ao caminho',
    ixBadge:'📋 Verificação do módulo — 70% para liberar o próximo módulo',
    ixItemBadge:'📋 Verificação do módulo — item {i} de {n}',
    scoreSoFar:'Pontuação até agora: {c} / {t}',
    continue:'Continuar →',
    sortWrong:'Quase — a resposta certa é “{label}”.',
    resPassed:'Módulo concluído!',
    resFailed:'Ainda não foi desta vez',
    resUnlocked:"Você liberou o próximo módulo.",
    resDone:"Você concluiu este mini-treinamento.",
    resNeed:'Você precisa de 70% para liberar o próximo módulo. Revise a seção acima e tente a verificação de novo.',
    resContinue:'Continuar para o caminho de aprendizado',
    resFinish:'Continuar',
    resBack:'Voltar ao caminho',
    resReview:'Revisar este módulo',
    doneEyebrow:'Mini-Treinamento Concluído',
    doneTitle:'🎉 Parabéns!',
    doneP1:"🎉 <strong>Parabéns! Você concluiu este mini-treinamento.</strong>",
    doneP2:"Está tudo pronto por aqui! Volte à página de treinamento do LMS por onde você acessou este mini-treinamento para encerrar a atividade.",
    doneP3:"👉 <strong>Se houver uma verificação ou avaliação listada logo abaixo do treinamento no LMS, não deixe de fazê-la e de obter uma nota de aprovação</strong> — caso contrário, a atividade pode continuar incompleta.",
    doneP4:'Boa sorte! ❤️',
    doneP5:'',
    devUnlockAlert:'Modo dev: todos os módulos estão desbloqueados para revisão.',
    devOn:'🔓 Modo dev ATIVADO — todos os módulos desbloqueados',
    devOff:'🔒 Modo dev DESATIVADO — progresso apagado',
    devBadge:'🔓 MODO DEV',
    doLabel:'✅ Faça',
    avoidLabel:'🚫 Evite',
    noticeLabel:'Atenção:',
    cvSee:'O que você vê:',
    cvDo:'O que você faz:',
    dtExample:'Exemplo de uma aula real',
    dtNext:'Próximo:',
    dtDone:"✅ Essas são as quatro áreas. Agora, classifique o que você observa.",
    tlVideoTitle:'{label} — um exemplo de aula real',
    tlVideoMeta:'Veja como esta fase acontece em uma aula real'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introdução', emoji:'🧩', color:'var(--coral)',
 title:'Por Que Você Está Aqui',
 desc:'Por que uma aula cheia de erros parece caótica — e as regras que valem quando um pedido de reembolso já foi feito.',
 obj:'Entender que a maioria desses casos vem de preparação, explicação ou conteúdo — e todos têm uma solução concreta — e saber exatamente o que fazer (e o que não fazer) quando já existe um pedido de reembolso.',
 sections:[
  {t:'😤 Quando a aula parece uma sequência de erros', html:`
   <div class="card"><p>Uma aula cheia de erros — do aluno, do material ou aqueles que aparecem no meio da explicação — pode parecer caótica rapidamente se você não tem um plano para lidar com eles. As famílias percebem isso logo: fica a impressão de que “a aula não está funcionando”, mesmo quando a causa pode ser resolvida em minutos.</p></div>
   ${co('co-idea','💡',`<p><strong>A maior parte disso pode ser evitada.</strong> Uma aula bem preparada, uma forma clara de explicar e saber como reportar um erro real de conteúdo evitam que pequenos erros virem uma aula que parece fora de controle.</p>`)}
  `},
  {t:'🛟 Se já existe um pedido de reembolso', html:`
   <div class="card"><p>Tudo o que vimos acima é sobre identificar o problema cedo. Mas talvez você esteja abrindo este treinamento porque uma família <strong>já</strong> pediu reembolso. As regras abaixo valem, seja qual for o motivo — leia-as primeiro e use o restante do treinamento para entender o que levou a isso e o que ainda dá para fazer na aula.</p></div>
   ${co('co-idea','💡',`<p><strong>O pedido em si é registrado pelo Client Service, não por você</strong> — essa parte não depende de você. O que continua nas suas mãos é tudo o que acontece na aula daqui para frente, e isso não é pouco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Não diga nada sobre o pedido em si</strong> — nem para a criança, nem para a família — a menos que o Client Service peça explicitamente que você diga algo específico. Agora o seu trabalho é a aula, não a conversa sobre o pedido.</p>`)}
  `},
  {t:'🎯 Sua próxima aula é a tentativa de reverter', html:`
   <div class="card"><p>Talvez você não tenha outra chance de mudar o cenário. Trate a próxima aula com essa criança como o momento que decide tudo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dê a ela uma chance real de participar.</strong> Não uma pergunta sem sentido — um momento genuíno em que ela é vista e se sai bem.`},
     {ic:'🏆', html:`<strong>Crie uma conquista visível logo no início.</strong> Ela deve sair da aula sentindo que é capaz, não que ficou para trás.`},
     {ic:'👀', html:`<strong>Atenção específica</strong> — faça-a se sentir notada por algo concreto, e não elogiada de forma genérica.`},
     {ic:'🤐', html:`<strong>Nenhuma menção ao pedido</strong> — mesmo que a criança toque no assunto, redirecione com carinho e continue ensinando.`}
   ])}
  `},
  {t:'📮 Avise rápido e conheça a única frase segura', html:`
   <div class="card"><p>Você pode descobrir que existe um pedido pelos comentários do Client Service no perfil da criança no BO — não há nenhum sistema automático que avise você. Depois que você souber, o que você viu nas suas aulas é uma informação que o Client Service não tem de nenhuma outra forma.</p></div>
   ${numlist([
     'Deixe um comentário no BO no mesmo dia com exatamente o que você viu — datas e detalhes, não impressões',
     'Inclua as palavras da própria família, literalmente, se você as tiver',
     'Avise seu Team Leader no mesmo dia',
     'Nunca confirme que um reembolso foi aprovado, nem converse sobre qualquer valor'
   ])}
   ${co('co-ok','✅',`<p><strong>A mensagem que é sempre segura de dizer:</strong> <em>“O Atendimento ao Cliente vai ajudar você com isso.”</em> Aí termina a sua parte da conversa — o Client Service assume a partir daí.</p>`)}
  `},
  {t:'🌱 Mantenha o cuidado depois', html:`
   <div class="card"><p>Seja o pedido retirado, a criança continue no seu grupo ou passe para outro tutor ou formato, continue dando uma atenção extra nas próximas aulas. Uma reversão que se sustenta por uma aula e depois volta discretamente ao normal muitas vezes não se sustenta de jeito nenhum.</p></div>
  `}
 ]
},
{id:'manual', numLabel:'Módulo 1', emoji:'📘', color:'var(--coral)',
 title:'Usando o Manual e Explicando Bem',
 desc:'O que o manual já oferece, por que estudá-lo no dia anterior evita a maioria dos problemas e as duas estratégias de ensino — modelagem e scaffolding — que ajudam um conceito a ser compreendido já na primeira vez.',
 obj:'Usar de forma eficaz os objetivos e as frases sugeridas do manual, saber onde buscar ajuda antes da aula e aplicar modelagem e scaffolding para explicar novos conceitos com mais clareza.',
 sections:[
  {t:'📘 O que o manual já oferece', html:`
   <div class="card"><p>Todo manual começa com os objetivos da aula e os resultados esperados — é nisso que você deve concentrar a atenção, e não apenas na sequência de passos. Ele também traz frases sugeridas para explicar cada conceito, escritas por pessoas que pensaram com cuidado em como apresentá-lo.</p></div>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image1.png" alt="Um manual de aula mostrando os objetivos da aula e os resultados educacionais"><figcaption>📌 No início de cada manual você encontra os objetivos de aprendizagem da aula e o que se espera que os alunos alcancem ou aprendam até o final dela.</figcaption></figure>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image2.png" alt="Uma página do manual de aula com uma frase sugerida para o tutor"><figcaption>💬 Se você estiver em dúvida sobre como fazer uma transição, apresentar um tema ou uma atividade, ou até mesmo explicá-la, o manual traz frases-guia que podem ajudar você a pensar em como dizer isso.</figcaption></figure>
  `},
  {t:'⏳ No dia anterior, não na hora anterior', html:`
   ${co('co-idea','💡',`<p><strong>Estude e pratique a aula no dia anterior</strong> — não uma hora antes, nem trinta minutos antes. Essa antecedência dá tempo real para você perceber: um código que não funciona mais, um material que não carrega ou uma atividade que nem você entendeu totalmente ainda.</p>`)}
   ${co('co-star','⭐',`<p>Se encontrar alguma falha, peça ajuda a um mentor, ao seu Team Leader ou a outros tutores no canal do Slack do seu curso. Buscar ajuda lá, no dia anterior, é exatamente o que evita que os problemas apareçam ao vivo, na frente do aluno.</p>`)}
  `},
  {t:'🧑‍🏫 O que realmente ajuda um conceito a ser compreendido', html:`
   <div class="card"><p>A forma como você explica importa tanto quanto explicar corretamente. Um conceito apresentado com clareza na primeira vez evita a maior parte dos erros causados por confusão que viriam depois.</p></div>
  `},
  {t:'🎬 Modelagem: mostre antes de eles tentarem', html:`
   <div class="card"><p><strong>Modelagem</strong> significa demonstrar a técnica você mesmo, na sua própria tela, antes de o aluno tentar. Explique em voz alta o que você está pensando enquanto faz — o raciocínio muitas vezes vale mais do que o resultado.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Modelagem, passo a passo</div><div class="vslot-meta">Exemplo de uma aula real</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1IgaGbg64ClvTs1DgnOXMhp_IPFtgCGfM/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">Neste vídeo, você vai ver como o tutor explica a tarefa passo a passo, com instruções curtas e simples.</div></div>
  `},
  {t:'🪜 Scaffolding: um apoio que diminui aos poucos', html:`
   <div class="card"><p><strong>Scaffolding</strong> significa dar mais apoio no início de um conceito novo — um modelo, passos guiados, trabalhar junto com o aluno — e ir retirando esse apoio de propósito conforme ele se sente mais seguro, até que consiga fazer sozinho.</p></div>
   ${co('co-idea','💡',`<p>O erro a evitar é o oposto: apoio total para sempre (o aluno nunca desenvolve autonomia) ou nenhum apoio desde o começo (ele esbarra em erros sem ter as ferramentas para resolvê-los, e a aula começa a parecer caótica).</p>`)}
  `}
 ],
 ix:{
  title:'Usando o Manual e Explicando Bem — verificação do módulo',
  instr:'70% para liberar o próximo módulo.',
  items:[
   {type:'choice', prompt:'No que você deve se concentrar primeiro ao abrir o manual de uma nova aula?', opts:['Apenas nos passos exatos, na ordem','Na lição de casa para a próxima vez','Nos objetivos e nos resultados esperados'], correct:2, fb:'Os objetivos mostram para que a aula realmente serve — os passos são apenas uma forma de chegar lá.'},
   {type:'choice', prompt:'Quando você deve estudar e praticar uma aula?', opts:['No dia anterior, não na hora anterior','Logo antes da aula, para estar fresco na memória','Só se for um tema que você ainda não ensinou'], correct:0, fb:'Um dia inteiro de antecedência dá tempo para realmente corrigir qualquer problema que você encontrar.'},
   {type:'choice', prompt:'O que significa “modelagem” em uma aula?', opts:['Mostrar um exemplo pronto, sem explicar como foi feito','Demonstrar a técnica você mesmo, pensando em voz alta, antes de o aluno tentar','Deixar o aluno tentar primeiro e depois corrigi-lo'], correct:1, fb:'Modelagem é mostrar primeiro — incluindo o seu próprio raciocínio — antes de ele tentar.'},
   {type:'sort', prompt:'Este scaffolding foi feito do jeito certo?', card:'Semana 1: você dá ao aluno um modelo e passos guiados. Semana 3: você dá apenas o objetivo e deixa que ele construa sozinho.', zones:[{label:'✅ Sim — isso é scaffolding', fb:'Correto — o apoio começa alto e é retirado de propósito conforme o aluno ganha autonomia.'},{label:'❌ Não — o apoio deveria continuar igual', fb:'Quase — manter o apoio total para sempre impede o aluno de desenvolver autonomia. Retirá-lo aos poucos é justamente o objetivo.'}], correctZone:0}
  ]
 }
},
{id:'contenterrors', numLabel:'Módulo 2', emoji:'🐞', color:'var(--coral)',
 title:'Erros de Conteúdo e Problemas Técnicos',
 desc:'O que fazer quando o próprio material está errado ou a tecnologia falha: como manter a turma calma, reportar corretamente no BO e resolver o problema sem perder o resto do grupo.',
 obj:'Lidar com um erro real de conteúdo ou de tradução sem deixar que ele atrapalhe a aula, saber exatamente como reportá-lo no BO e aplicar a lógica de resolver rápido / comunicar / documentar / escalar nas falhas técnicas.',
 sections:[
  {t:'🐞 Às vezes o problema é o material', html:`
   <div class="card"><p>Às vezes a aula vira um caos não por causa do aluno, mas por um erro real no conteúdo ou na tradução — um trecho de código quebrado, uma instrução que não corresponde à ferramenta, um termo mal traduzido. Estas são as situações mais comuns e como você pode reagir:</p></div>
   ${iconGrid([
     {ic:'🐛', html:`<strong>Um aluno percebe que algo está mal traduzido ou com erro de ortografia.</strong> O que fazer: diga em voz alta, com naturalidade, e transforme isso em algo que vocês resolvem juntos, em vez de algo que deu errado. Exemplo: <em>“Boa observação — parece que essa linha tem um erro de digitação, vamos descobrir juntos o que deveria estar escrito.”</em>`},
     {ic:'💻', html:`<strong>Um aluno percebe que o código não funciona por causa de um erro de escrita ou de digitação.</strong> Exemplo: <em>“Muito bem — parece que alguém encontrou o erro escondido. Eu queria ver se alguém ia perceber.”</em>`},
     {ic:'🖼️', html:`<strong>Algumas imagens aparecem em falta ou não carregam.</strong> Exemplo: <em>“Deve ser só uma falha da plataforma, não se preocupem — tenho os slides aqui, então vocês ainda podem ver.”</em> Ou: <em>“Sem problemas, coisas assim acontecem, e vocês vão encontrar isso muitas vezes como programadores — por enquanto, olhem a minha tela.”</em>`}
   ])}
  `},
  {t:'💛 Como reagir aos erros com calma', html:`
   <div class="card"><p>Um erro de conteúdo é um pequeno momento que pode ter dois rumos: um contratempo passageiro que a turma mal nota, ou uma rachadura na confiança de um aluno. O que decide qual dos dois acontece não é o erro em si — é como você reage nos primeiros segundos. Falar sobre ele em voz alta, sem constrangimento nem culpa, mostra aos alunos que errar é uma parte normal e esperada de aprender a programar, e ensina exatamente a mentalidade que você quer que eles levem para os próprios bugs: notar, manter a curiosidade, corrigir e seguir em frente.</p></div>
   ${co('co-ok','✅',`<p><strong>Diga:</strong> <em>“Boa observação, isso é problema do material, não seu — vamos dar um jeito juntos.”</em> Direcione a atenção para encontrar uma solução em equipe e continue em frente.</p>`)}
   ${co('co-danger','⛔',`<p><strong>Evite:</strong> dar ao erro uma importância exagerada, culpar a plataforma em voz alta de um jeito que abale a confiança no curso, ou gastar tanto tempo com isso que o resto da aula seja prejudicado.</p>`)}
  `},
  {t:'🖥️ Encontrando o material — e reportando erros — no BO', html:`
   <div class="card"><p>O manual e a apresentação de cada aula ficam dentro do BackOffice (BO), vinculados ao registro exato do curso em que você leciona. É também lá que você reporta um erro de conteúdo, com o ícone 🐞 na linha da aula. A simulação abaixo mostra o passo a passo.</p></div>
   ${co('co-danger','🚨',`<p><strong>Sempre confira se o ID do curso que você abriu é o mesmo em que seus alunos estão matriculados.</strong> No BO existem cursos parecidos lado a lado — dar aula com o material errado pode transformar a aula em um caos em segundos.</p>`)}
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Material do curso &amp; erros de conteúdo</span><iframe src="Simulacion_BO_CourseMaterial.html" title="BO — Material do curso e erros de conteúdo" loading="lazy"></iframe></div></div>
   ${co('co-star','⭐',`<p>Reportar um erro não corrige só a sua aula — corrige para todos os grupos que vierem depois do seu com o mesmo material.</p>`)}
  `},
  {t:'🔧 Quando o problema é técnico: o protocolo', html:`
   <div class="card"><p>Às vezes a sequência de erros em uma aula é técnica: uma tela travada, uma ferramenta que não carrega, uma conexão que fica caindo. Problemas técnicos são normais e podem acontecer tanto com tutores quanto com alunos — o importante é que eles não se agravem.</p></div>
   ${co('co-idea','💡',`<p><strong>A regra de ouro.</strong> Se você não conseguir resolver sozinho em <strong>10 minutos</strong>, pare de tentar em silêncio. <strong>Comunique → documente → escale.</strong> Um responsável que sabe o que está acontecendo confia em você. Um que não sabe, cancela.</p>`)}
   ${stepFlow([
     {ic:'⏱️', label:'Primeira vez na aula: tente resolver por até 10 minutos'},
     {ic:'👩‍💼', label:'Continua com problema? Avise seu Team Leader no mesmo dia — ele decide a opção de reposição'},
     {ic:'💬', label:'Envie uma mensagem ao responsável em até 30 minutos, com carinho: você já avisou a sua equipe'},
     {ic:'🎫', label:'Segunda aula seguida? Abra um ticket no Client Service no mesmo dia'},
     {ic:'✅', label:'Depois de resolvido: avise o responsável e feche o ciclo'}
   ])}
  `},
  {t:'🧑‍💻 Evitando problemas técnicos do seu lado', html:`
   <div class="card"><p>Um problema técnico do tutor pode travar a aula tanto quanto o de um aluno. A maioria deles pode ser identificada antes mesmo de a aula começar.</p></div>
   ${iconGrid([
    {ic:'🔌', html:`<strong>Teste 30 minutos antes.</strong> Verifique a conexão de internet, a câmera e o microfone antes de cada aula. Se notar algum problema, avise seu Team Leader.`},
    {ic:'📷', html:`<strong>Procure alternativas.</strong> Se desligar a câmera melhora a sua conexão, faça isso.`},
    {ic:'🎙️', html:`<strong>Tenha um microfone reserva.</strong> Se o seu fone não estiver funcionando, tente outra opção, como o áudio integrado do computador, e sempre ative a redução de ruído de fundo no Classroom.`},
    {ic:'📶', html:`<strong>Verifique seus drivers e se há uma VPN ativa</strong> — as VPNs costumam deixar a conexão mais lenta.`},
    {ic:'🧊', html:`<strong>Vai trabalhar com uma ferramenta pesada, como o Blender?</strong> O curso inclui, nas primeiras aulas, um guia de como configurá-lo para um melhor desempenho.`},
    {ic:'💻', html:`<strong>Libere memória RAM antes da aula.</strong> O Google Chrome oferece a melhor experiência com o Classroom, mas também costuma usar muita RAM — feche as abas e os programas de que você não precisa no momento.`},
    {ic:'👂', html:`<strong>Confirme ao vivo.</strong> Antes de a aula começar, pergunte aos alunos se eles conseguem ver e ouvir você direito — assim você identifica problemas técnicos logo no começo.`}
   ])}
  `},
  {t:'🎓 Apoiando alunos com problemas técnicos', html:`
   <div class="card"><p>Muitas vezes, os problemas técnicos que os alunos enfrentam na aula estão relacionados ao uso de um navegador diferente do Google Chrome ou de dispositivos inadequados para o curso, como tentar assistir à aula em um tablet, celular ou iPad. Por isso é importante que você conheça os requisitos mínimos, para poder ajudá-los.</p></div>
   ${doavoid(
    ["Google Chrome atualizado — o único navegador totalmente compatível",
     "Pelo menos 4 GB de RAM (8 GB para Blender ou Unity)",
     "Uma conexão estável, de no mínimo 10 Mbps — uma conexão cabeada é melhor que o Wi-Fi, sempre que possível",
     "Pelo menos 5 GB de armazenamento livre — Unity e Blender exigem bem mais"],
    ["Safari — com bugs conhecidos na plataforma da Kodland desde a última atualização: botões que não respondem, telas que não carregam, erros ao entrar",
     "Tablets / iPads para cursos como Roblox Studio ou Unity — é preciso um computador de verdade",
     "Supor que um problema no Mac seja falta de interesse sem antes verificar se é simplesmente o Safari"]
   )}
   ${co('co-idea','🍎',`<p>Fique atento especialmente a Mac + Safari. Se um aluno com Mac não consegue fazer os botões responderem ou a tela não carrega, a solução quase sempre é: abrir a aula no Google Chrome. Indique às famílias o endereço google.com/chrome.</p>`)}
  `},
  {t:'⚖️ Sem abandonar o resto da turma', html:`
   <div class="card"><p>O erro a evitar não é só o problema técnico em si — é um tutor tão concentrado no problema de um único aluno que o resto do grupo perde cinco ou dez minutos de aula.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>Defina um limite de tempo.</strong> Dê ao aluno afetado uma tentativa rápida de solução (trocar para o Chrome, atualizar a página, reiniciar), depois siga com o grupo e retome com esse aluno entre as atividades ou depois da aula.`},
     {ic:'👥', html:`<strong>Dê ao grupo algo para fazer</strong> assim que começar a resolver o problema — não deixe todos olhando para uma tela parada.`},
     {ic:'🫂', html:`<strong>Mantenha a calma, em voz alta.</strong> Um “isso acontece às vezes, vamos dar um jeito” dito com tranquilidade mantém a turma firme enquanto você resolve.`},
     {ic:'📝', html:`<strong>Deixe um registro.</strong> Se um dispositivo continua causando o mesmo problema, avise a família, deixe um comentário no BO e envolva seu Team Leader — em vez de resolver tudo de novo a cada aula.`}
   ])}
  `}
 ],
 ix:{
  title:'Erros de Conteúdo e Problemas Técnicos — verificação do módulo',
  instr:'70% para liberar o checklist final.',
  items:[
   {type:'choice', prompt:'Um aluno percebe um bug real no código de exemplo da aula. Qual é a sua primeira atitude na sala?', opts:['Pular a atividade sem explicação, para ganhar tempo','Falar sobre o bug com calma e transformar isso em um momento de “vamos resolver juntos”','Dizer ao grupo que a plataforma sempre está cheia de erros'], correct:1, fb:'Calma e colaboração evitam que a aula pareça um caos — e mostram como lidar com bugs.'},
   {type:'sort', prompt:'Erro de conteúdo ou problema técnico?', card:'Uma linha do código inicial da aula tem um erro de digitação e gera um erro antes mesmo de alguém mexer em qualquer coisa.', zones:[{label:'🔧 Problema técnico → siga o protocolo', fb:'Quase — o próprio código está errado, para todos. Isso é um erro de conteúdo: contorne com calma e reporte com o ícone 🐞 no BO.'},{label:'🐞 Erro de conteúdo → reporte no BO', fb:'Correto — o próprio material está errado. Contorne com calma e depois reporte com o ícone 🐞 para que seja corrigido para todos os grupos.'}], correctZone:1},
   {type:'sort', prompt:'Erro de conteúdo ou problema técnico?', card:'A tela de um aluno fica travando e o áudio fica cortando no meio da aula.', zones:[{label:'🔧 Problema técnico → siga o protocolo', fb:'Correto — tente uma solução rápida, mantenha o grupo trabalhando e comunique, documente e escale se o problema se repetir.'},{label:'🐞 Erro de conteúdo → reporte no BO', fb:'Quase — não há nada de errado com o material. Tela travada e áudio falhando são problemas técnicos: siga o protocolo.'}], correctZone:0},
   {type:'choice', prompt:'Onde você reporta um erro de conteúdo no BO?', opts:['Em uma mensagem para a família do aluno','Na aba Check do grupo','Com o ícone 🐞 na linha da aula, dentro do registro do curso'], correct:2, fb:'O ícone 🐞 em cada linha de aula abre a pesquisa de qualidade do conteúdo — é isso que faz o material ser corrigido.'},
   {type:'choice', prompt:'O mesmo problema técnico acontece pela segunda aula seguida. O que muda?', opts:['Abrir um ticket no Client Service no mesmo dia','Nada — continuar tentando resolver sozinho','Esperar mais uma aula para ter certeza de que é um padrão'], correct:0, fb:'Se se repete, é hora de escalar para o Client Service — e avisar o responsável de que alguém vai entrar em contato.'}
  ]
 }
},
{id:'checklist', numLabel:'Checklist Final', emoji:'✅', color:'var(--coral)',
 title:'Checklist Final',
 desc:'Aqui não há quiz — apenas o essencial deste mini-treinamento, antes de você encerrá-lo.',
 obj:'Revise o checklist abaixo. Este módulo não vale nota — leia e depois conclua o mini-treinamento.',
 sections:[
  {t:'🛟 Se já existe um pedido de reembolso', html:`
   ${numlist([
     'Deixei um comentário no BO no mesmo dia em que soube do pedido e avisei meu Team Leader',
     'Minha próxima aula com este aluno foi uma tentativa real de reverter a situação — uma chance real de participar, uma conquista visível, atenção específica, sem mencionar o pedido',
     'Nunca confirmei a aprovação nem conversei sobre qualquer valor — usei a única frase segura e deixei o resto com o Client Service'
   ])}
  `},  {t:'🌱 Em todas as aulas', html:`
   ${numlist([
     'Estudo e pratico cada aula no dia anterior, começando pelos objetivos e pelos resultados esperados do manual',
     'Uso as frases sugeridas do manual para explicar novos conceitos e peço ajuda ao meu mentor, ao Team Leader ou ao canal do Slack sobre qualquer lacuna antes da aula',
     'Faço primeiro a modelagem: demonstro na minha própria tela e penso em voz alta antes de os alunos tentarem',
     'Aplico o scaffolding: muito apoio no começo (um modelo, passos guiados), e cada vez menos conforme o aluno ganha autonomia',
     'Quando o material tem um erro, falo dele com calma e transformo isso em algo que resolvemos juntos',
     'Naturalizo os erros em voz alta, para que os alunos vejam os erros como parte normal de aprender a programar — e não algo de que se envergonhar',
     'Nunca dou importância exagerada a um erro, nem culpo a plataforma na frente dos alunos, nem deixo que ele consuma o resto da aula',
     'Reporto todo erro de conteúdo com o ícone 🐞 no BO e confiro se o ID do curso corresponde ao grupo dos meus alunos',
     'Testo minha conexão, câmera e microfone 30 minutos antes da aula e fecho as abas e os programas de que não preciso',
     'Garanto que os alunos usem o Google Chrome e um dispositivo adequado — nada de Safari, e nada de tablets para cursos como Roblox Studio ou Unity',
     'Em problemas técnicos: até 10 minutos para resolver e depois comunico, documento e escalo — e abro um ticket no Client Service se acontecer em duas aulas seguidas',
     'Enquanto ajudo um aluno com um problema técnico, dou ao resto do grupo algo para trabalhar, para que ninguém fique esperando'
   ])}
  `},  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Este é todo o mini-treinamento.</strong> Quando estiver pronto, continue — e depois conclua o DST no LMS para encerrar a atividade.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
