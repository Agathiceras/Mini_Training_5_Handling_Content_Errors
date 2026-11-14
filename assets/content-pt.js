/* Mini_Training_5_Handling_Content_Errors - Portuguese content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pt';
const CONTENT = {
  flag:'🇧🇷', dir:'ltr',
  ui:{
    heroCard1:"<b>No seu ritmo.</b> Seu progresso fica salvo neste navegador.",
    heroCard2:"<b>Com prática.</b> Cada módulo termina com uma verificação rápida.",
    pbLabel:'módulos concluídos',
    tapOpen:'Toque para abrir',
    tapFlip:'Toque para virar',
    lblSee:'O que você vê',
    lblDo:'O que você faz',
    lblSay:'O que você pode dizer',
    lblReport:'Onde relatar',
    lblAvoid:'Evite',
    lblTip:'Dica',
    stepOf:'Passo {i} de {n}',
    next:'Próximo',
    pageTitle:"Mini-Treinamento · Como Lidar com Erros na Aula — Treinamento de Tutores Kodland",
    logoSub:'Departamento de Desenvolvimento de Tutores',
    heroEyebrow:"🎯 Mini-Treinamento",
    heroTitle:"Como Manter a Aula Firme Mesmo com <span class=\"h-pill\">Erros</span>",
    heroIntro:"Você está vendo isto porque uma família fez um pedido de reembolso muito negativo: uma aula que pareceu cheia de erros, um problema com o serviço da empresa ou muita raiva sem uma causa clara. Aqui, vamos mostrar o que cabe a você resolver, o que reportar ao Client Service e como lidar com a situação com calma.",
    heroWork:"Conclua 6 módulos curtos. Cada avaliação de módulo exige pelo menos 70% para desbloquear o próximo. Duração total aproximada: 40–45 minutos.",
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
    resNeed:'Você precisa de Acerte 70% do quiz para liberar o próximo módulo. Revise a seção acima e tente a verificação de novo.',
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
 desc:'Por que uma aula cheia de erros parece caótica, o que mais costuma estar por trás de uma família muito insatisfeita — e as regras que se aplicam quando um pedido de reembolso já chegou.',
 obj:'Entender as principais causas por trás de uma família muito insatisfeita — erros na aula, problemas operacionais, problemas com a aula ou o tutor e responsáveis muito irritados — e saber exatamente o que fazer (e o que não fazer) quando já existe um pedido de reembolso.',
 sections:[
  {t:'😤 Quando a aula parece uma sequência de erros', html:`
   <div class="card"><p>Uma aula cheia de erros — do aluno, do material ou aqueles que aparecem no meio da explicação — pode parecer caótica rapidamente se você não tem um plano para lidar com eles. As famílias percebem isso logo: fica a impressão de que “a aula não está funcionando”, mesmo quando a causa pode ser resolvida em minutos.</p></div>
   ${co('co-idea','💡',`<p><strong>A maior parte disso pode ser evitada.</strong> Uma aula bem preparada, uma forma clara de explicar e saber como reportar um erro real de conteúdo evitam que pequenos erros virem uma aula que parece fora de controle.</p>`)}
  `},
  {t:'🧭 Uma família muito insatisfeita — o que costuma estar por trás', html:`
   <div class="card"><p>Erros na aula são apenas uma parte do quadro. Quando uma família está muito insatisfeita, a causa muitas vezes está fora da aula — e você ainda precisa saber o que fazer com ela:</p></div>
   ${iconGrid([
     {ic:'🐞', html:`<strong>Uma aula que pareceu cheia de erros</strong> — preparação, explicações, conteúdo ou problemas técnicos. <em>Módulos 1 e 2.</em>`},
     {ic:'🏢', html:`<strong>Questões da empresa e operacionais</strong> — cobrança, parcelas, saldos, mudanças de grupo, atrasos no início, suporte que não responde, promessas do comercial, a licença do Minecraft. <em>Módulo 3.</em>`},
     {ic:'🧑‍🏫', html:`<strong>A aula ou o tutor</strong> — ritmo, explicações, um grupo caótico, uma aula perdida, conexão, necessidades especiais, trocas demais de tutor. <em>Módulo 3.</em>`},
     {ic:'🌋', html:`<strong>Um responsável muito irritado ou ameaçador</strong>, às vezes sem uma causa clara. <em>Módulo 4.</em>`}
   ])}
   ${co('co-ok','✅',`<p><strong>O que cabe a você em todos os casos:</strong> corrigir o que está na sua aula, reportar o restante ao Client Service no mesmo dia e manter a calma e o respeito — seja qual for o tom da família.</p>`)}
  `},
  {t:'🛟 Se já existe um pedido de reembolso', html:`
   <div class="card"><p>Tudo o que vimos acima é sobre identificar o problema cedo. Mas talvez você esteja abrindo este treinamento porque uma família <strong>já</strong> pediu reembolso. As regras abaixo valem, seja qual for o motivo — leia-as primeiro e use o restante do treinamento para entender o que levou a isso e o que ainda dá para fazer na aula.</p></div>
   ${co('co-idea','💡',`<p><strong>O pedido em si é registrado pelo Client Service, não por você</strong> — essa parte não depende de você. O que continua nas suas mãos é tudo o que acontece na aula daqui para frente, e isso não é pouco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Não diga nada sobre o pedido em si</strong> — nem para a criança, nem para a família — a menos que o Client Service peça explicitamente que você diga algo específico. Agora o seu trabalho é a aula, não a conversa sobre o pedido.</p>`)}
  `},
  {t:'🎯 Sua próxima aula é a tentativa de reverter', html:`
   <div class="card"><p>Talvez você não tenha outra chance de mudar o cenário. Trate a próxima aula com essa criança como o momento que decide tudo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dê espaço para ela participar de verdade.</strong> Não faça uma pergunta só por fazer. Crie um momento genuíno em que ela se sinta valorizada e tenha a oportunidade de acertar.`},
     {ic:'🏆', html:`<strong>Crie uma conquista visível logo no início.</strong> Ela deve sair da aula sentindo que é capaz, não que ficou para trás.`},
     {ic:'👀', html:`<strong>Atenção específica</strong> — faça-a se sentir notada por algo concreto, e não elogiada de forma genérica.`},
     {ic:'🤐', html:`<strong>Nenhuma menção ao pedido</strong> — mesmo que a criança toque no assunto, redirecione com carinho e continue ensinando.`}
   ])}
  `},
  {t:'📮 Avise rápido e conheça a única frase segura', html:`
   <div class="card"><p>Você pode descobrir se há um pedido de reembolso por meio dos comentários do Client Service no perfil do aluno, no BO. Não há nenhum sistema automático que envie esse aviso. Quando ficar sabendo, lembre-se de que as informações que você obteve durante as aulas são algo que o Client Service não tem como conseguir de outra forma.</p></div>
   ${numlist([
     'Deixe um comentário no BO no mesmo dia com exatamente o que você viu — datas e detalhes, não impressões',
     'Inclua as palavras da própria família, literalmente, se você as tiver',
     'Avise seu Team Leader no mesmo dia',
     'Nunca confirme que um reembolso foi aprovado, nem converse sobre qualquer valor'
   ])}
   ${co('co-ok','✅',`<p><strong>A mensagem que é sempre segura de dizer:</strong> <em>“O Atendimento ao Cliente vai ajudar você com isso.”</em> Aí termina a sua parte da conversa — o Client Service assume a partir daí.</p>`)}
  `},
  {t:'🌱 Mantenha o cuidado depois', html:`
   <div class="card"><p>Independentemente de o pedido de reembolso ser retirado, de a criança continuar no seu grupo ou de passar para outro tutor ou formato, continue dando atenção extra nas aulas seguintes. Uma melhora que dura apenas uma aula e depois dá lugar à rotina habitual dificilmente se mantém a longo prazo.</p></div>
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
  instr:'Acerte 70% do quiz para liberar o próximo módulo.',
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
   ${co('co-star','⭐',`<p>Reportar um erro não corrige apenas a sua aula: também evita que os próximos grupos que utilizarem o mesmo material encontrem o mesmo problema.</p>`)}
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
    {ic:'🧊', html:`<strong>Vai trabalhar com uma ferramenta pesada, como o Roblox Studio?</strong> Peça para fechar os outros programas e, se ainda estiver lento, reduza a qualidade gráfica nas configurações do programa.`},
    {ic:'💻', html:`<strong>Libere memória RAM antes da aula.</strong> O Google Chrome oferece a melhor experiência com o Classroom, mas também costuma usar muita RAM — feche as abas e os programas de que você não precisa no momento.`},
    {ic:'👂', html:`<strong>Confirme ao vivo.</strong> Antes de a aula começar, pergunte aos alunos se eles conseguem ver e ouvir você direito — assim você identifica problemas técnicos logo no começo.`}
   ])}
  `},
  {t:'🎓 Apoiando alunos com problemas técnicos', html:`
   <div class="card"><p>Muitas vezes, os problemas técnicos que os alunos enfrentam na aula estão relacionados ao uso de um navegador diferente do Google Chrome ou de dispositivos inadequados para o curso, como tentar assistir à aula em um tablet, celular ou iPad. Por isso é importante que você conheça os requisitos mínimos, para poder ajudá-los.</p></div>
   ${doavoid(
    ["Google Chrome atualizado — o único navegador totalmente compatível",
     "Pelo menos 4 GB de RAM",
     "Uma conexão estável, de no mínimo 10 Mbps — uma conexão cabeada é melhor que o Wi-Fi, sempre que possível",
     "Pelo menos 5 GB de armazenamento livre"],
    ["Safari — com bugs conhecidos na plataforma da Kodland desde a última atualização: botões que não respondem, telas que não carregam, erros ao entrar",
     "Tablets / iPads para cursos como Roblox Studio — é preciso um computador de verdade",
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
  instr:'70% para desbloquear o próximo módulo.',
  items:[
   {type:'choice', prompt:'Um aluno percebe um bug real no código de exemplo da aula. Qual é a sua primeira atitude na sala?', opts:['Pular a atividade sem explicação, para ganhar tempo','Falar sobre o bug com calma e transformar isso em um momento de “vamos resolver juntos”','Dizer ao grupo que a plataforma sempre está cheia de erros'], correct:1, fb:'Calma e colaboração evitam que a aula pareça um caos — e mostram como lidar com bugs.'},
   {type:'sort', prompt:'Erro de conteúdo ou problema técnico?', card:'Uma linha do código inicial da aula tem um erro de digitação e gera um erro antes mesmo de alguém mexer em qualquer coisa.', zones:[{label:'🔧 Problema técnico → siga o protocolo', fb:'Quase — o próprio código está errado, para todos. Isso é um erro de conteúdo: contorne com calma e reporte com o ícone 🐞 no BO.'},{label:'🐞 Erro de conteúdo → reporte no BO', fb:'Correto — o próprio material está errado. Contorne com calma e depois reporte com o ícone 🐞 para que seja corrigido para todos os grupos.'}], correctZone:1},
   {type:'sort', prompt:'Erro de conteúdo ou problema técnico?', card:'A tela de um aluno fica travando e o áudio fica cortando no meio da aula.', zones:[{label:'🔧 Problema técnico → siga o protocolo', fb:'Correto — tente uma solução rápida, mantenha o grupo trabalhando e comunique, documente e escale se o problema se repetir.'},{label:'🐞 Erro de conteúdo → reporte no BO', fb:'Quase — não há nada de errado com o material. Tela travada e áudio falhando são problemas técnicos: siga o protocolo.'}], correctZone:0},
   {type:'choice', prompt:'Onde você reporta um erro de conteúdo no BO?', opts:['Em uma mensagem para a família do aluno','Na aba Check do grupo','Com o ícone 🐞 na linha da aula, dentro do registro do curso'], correct:2, fb:'O ícone 🐞 em cada linha de aula abre a pesquisa de qualidade do conteúdo — é isso que faz o material ser corrigido.'},
   {type:'choice', prompt:'O mesmo problema técnico acontece pela segunda aula seguida. O que muda?', opts:['Abrir um ticket no Client Service no mesmo dia','Nada — continuar tentando resolver sozinho','Esperar mais uma aula para ter certeza de que é um padrão'], correct:0, fb:'Se se repete, é hora de escalar para o Client Service — e avisar o responsável de que alguém vai entrar em contato.'}
  ]
 }
},
{id:'operations', numLabel:'Módulo 3', emoji:'🏢', color:'var(--coral)',
 title:'Problemas da empresa e da aula: como reportá-los do jeito certo',
 desc:'O que fazer quando uma família está insatisfeita com cobrança, saldos, grupos, datas de início, suporte ou promessas do comercial — ou com a própria aula — e como acionar o Client Service com um relatório no BO.',
 obj:'Distinguir o que cabe a você resolver e o que cabe a você reportar, responder a reclamações operacionais sem explicar, defender nem prometer, corrigir os problemas de aula que são seus e reportar todos os casos ao Client Service no BO no mesmo dia.',
 sections:[
  {t:'🧭 É para você resolver ou para reportar?', html:`
   <div class="card"><p>Uma família muito insatisfeita raramente reclama de uma coisa só. Muitas vezes a raiva é com a empresa — uma cobrança, um saldo, um grupo que mudou — e você é simplesmente a pessoa que eles veem toda semana. Antes de responder, pergunte-se de que tipo de problema se trata:</p></div>
   ${patternCards([
     {ic:'🏢', title:'Empresa e operações', desc:'Cobrança, parcelas, saldos, grupos, datas de início, suporte, o que o comercial prometeu, licenças.', note:'<strong>Não cabe a você resolver nem explicar.</strong> Reconheça, reporte ao Client Service no BO e avise seu Team Leader.'},
     {ic:'🧑‍🏫', title:'A aula ou o tutor', desc:'Ritmo, explicações, um grupo caótico, uma aula perdida, conexão, necessidades especiais, trocas de tutor.', note:'<strong>Cabe a você em parte.</strong> Corrija o que puder na próxima aula e reporte.'},
     {ic:'🔧', title:'Técnico', desc:'Classroom, a plataforma, as ferramentas do curso, o dispositivo do aluno.', note:'<strong>Siga o protocolo</strong> do Módulo 2: 10 minutos e, depois, comunicar, documentar e escalar.'}
   ],3)}
  `},
  {t:'🏢 Questões operacionais e da empresa — o que você faz e o que você diz', html:`
   <div class="card"><p>Toque em cada questão. O padrão é sempre o mesmo: <strong>reconheça, não explique, não prometa, reporte no mesmo dia.</strong> Você não tem o quadro completo dos pagamentos, do contrato ou da conversa comercial de uma família — e um palpite bem-intencionado pode virar uma promessa que a empresa não consegue cumprir.</p></div>
   ${symCards([
     {ic:'💳', title:'Cobrança e parcelas',
      see:`Uma cobrança inesperada, uma parcela que a família não conhecia, um pagamento que eles acham que já foi feito.`,
      do:`Anote exatamente o que a família diz e reporte ao Client Service no BO no mesmo dia.`,
      say:`<em>«Entendo que isso preocupe. Já encaminhei ao Atendimento ao Cliente, que vai ajudar vocês com isso.»</em>`,
      rep:`Client Service (relatório no BO) + Team Leader + comentário no BO.`,
      avoid:`Explicar como funcionam os pagamentos ou dizer se uma cobrança está correta.`},
     {ic:'🔄', title:'Recálculo após a mudança para o Premium ou outro formato',
      see:`A família migrou para o Premium, aulas individuais ou outro formato e está insatisfeita com a quantidade de aulas que tem agora.`,
      do:`Não comente os números. Reporte ao Client Service no BO, com as palavras da própria família.`,
      say:`<em>«O Atendimento ao Cliente vai ajudar vocês com isso.»</em>`,
      rep:`Client Service (relatório no BO) + Team Leader + comentário no BO.`,
      avoid:`Calcular as aulas por conta própria ou concordar que é injusto.`},
     {ic:'🎟️', title:'Saldo contestado',
      see:`«Deveríamos ter mais aulas.» «Uma aula que não aconteceu foi descontada.»`,
      do:`Confira a presença que você registrou no BO e depois encaminhe ao seu Team Leader e ao Client Service no mesmo dia — o Operations revisa saldos e descontos.`,
      say:`<em>«Obrigado por me avisar. Compartilhei com minha equipe para que seja verificado.»</em>`,
      rep:`Team Leader + Client Service + comentário no BO (Operations: @Yana, @Flavia · Client Service: @Carlos Tamaoki).`,
      avoid:`Prometer devolver aulas ou dizer que o saldo está certo ou errado.`},
     {ic:'👥', title:'Mudanças de grupo ou grupo que é encerrado',
      see:`O grupo mudou, foi unificado ou encerrado, e a criança perdeu colegas, um tutor ou um horário conhecido.`,
      do:`Faça a primeira aula na nova situação ser acolhedora. Reporte as preocupações da família ao Client Service no BO.`,
      say:`<em>«Entendo que a mudança não é fácil. Compartilhei com minha equipe para que entrem em contato com vocês.»</em>`,
      rep:`Client Service (relatório no BO) + Team Leader + comentário no BO.`,
      avoid:`Explicar por que o grupo mudou ou prometer a volta do grupo antigo.`},
     {ic:'⏳', title:'Atrasos no início',
      see:`A família está esperando a abertura de um grupo, ou a data de início mudou.`,
      do:`Não informe datas que você não tem. Reporte ao Client Service no BO.`,
      say:`<em>«Entendo que a espera é frustrante. O Atendimento ao Cliente vai ajudar vocês com a data de início.»</em>`,
      rep:`Client Service (relatório no BO) + Team Leader + comentário no BO.`,
      avoid:`Chutar uma data de início ou culpar outra equipe.`},
     {ic:'📞', title:'«O suporte não responde»',
      see:`A família diz que ninguém responde às mensagens ou ligações.`,
      do:`Reconheça — essa frustração é real. Reporte no mesmo dia, para que o Client Service saiba que a família está esperando.`,
      say:`<em>«Sinto muito que vocês não tenham tido resposta. Reportei hoje para que o Atendimento ao Cliente retorne.»</em>`,
      rep:`Client Service (relatório no BO) + Team Leader + comentário no BO.`,
      avoid:`Dizer «eles nunca respondem» ou criticar a equipe — isso confirma o pior medo da família.`},
     {ic:'🗣️', title:'«O comercial nos prometeu outra coisa»',
      see:`Grupos menores, outro curso, um nível, um preço ou um resultado que «nos prometeram».`,
      do:`Anote as palavras da família literalmente e reporte. Na aula, concentre-se no que você pode fazer pela criança.`,
      say:`<em>«Obrigado por me contar. Compartilhei com minha equipe, e o Atendimento ao Cliente entrará em contato com vocês sobre isso.»</em>`,
      rep:`Client Service (relatório no BO) + Team Leader + comentário no BO.`,
      avoid:`Confirmar ou negar o que o comercial disse, ou fazer uma nova promessa para resolver.`},
     {ic:'🧱', title:'Licença do Minecraft',
      see:`Perguntas ou reclamações sobre a conta ou a licença do Minecraft, ou sobre por que o curso funciona do jeito que funciona.`,
      do:`Ajude no que estiver na aula (a conta que o curso exige, a configuração). Tudo sobre a licença em si vai para o Client Service.`,
      say:`<em>«O Atendimento ao Cliente vai ajudar vocês com a dúvida sobre a licença.»</em>`,
      rep:`Client Service (relatório no BO) + Team Leader + comentário no BO.`,
      avoid:`Comentar motivos internos, licenças ou mudanças no conteúdo do curso.`}
   ])}
   ${co('co-ok','✅',`<p><strong>Reconhecer é sempre permitido.</strong> Uma resposta curta e acolhedora — você viu, entende e encaminhou — não precisa da aprovação de ninguém. Explicações, opções e qualquer assunto de dinheiro ficam com o Client Service.</p>`)}
  `},
  {t:'🧑‍🏫 Quando o problema é a aula', html:`
   <div class="card"><p>Algumas reclamações fortes são sobre a própria aula. Elas cabem a você em parte: corrija o que puder já a partir da próxima aula — e reporte mesmo assim, para que seu Team Leader e o Client Service não sejam pegos de surpresa.</p></div>
   <div class="tbl-wrap"><table>
    <tr><th>O que a família diz</th><th>O que você faz</th><th>O que você reporta</th></tr>
    <tr><td>«O método não é adequado para a idade dele»</td><td>Etapas mais curtas, palavras que eles conhecem, mais demonstração — adapte à idade do grupo</td><td>Comentário no BO + Team Leader se a diferença de idade no grupo for grande</td></tr>
    <tr><td>«O tutor avança sem explicar»</td><td>Uma instrução de cada vez e verifique a compreensão antes de seguir</td><td>Comentário no BO com o que você mudou</td></tr>
    <tr><td>«O grupo está caótico»</td><td>Regras de sala desde a aula 1, turnos de fala, condução calma e firme</td><td>Comentário no BO + família informada sobre os incidentes</td></tr>
    <tr><td>«O tutor não apareceu» / «a aula foi adiada»</td><td>Nunca cancele nem mude uma aula por conta própria; avise seu Team Leader assim que souber</td><td>Team Leader no mesmo dia — ele decide a reposição</td></tr>
    <tr><td>«A conexão não para de cair»</td><td>Teste sua configuração antes de cada aula; siga o protocolo técnico</td><td>Bot EU Request from Tutors + comentário no BO</td></tr>
    <tr><td>«O tutor não estava preparado para as necessidades especiais do meu filho»</td><td>Rotina, ritmo mais lento, etapas menores, outras formas de responder; pergunte à família o que ajuda</td><td>Comentário no BO + Team Leader — você recomenda, ele decide sobre o formato</td></tr>
    <tr><td>«Trocas demais de tutor»</td><td>Se você assumir um grupo, leia os comentários no BO, apresente-se e mantenha as rotinas do grupo</td><td>Team Leader, para que a família saiba das mudanças com antecedência</td></tr>
   </table></div>
   ${co('co-idea','📚',`<p><strong>Quer se aprofundar?</strong> Ritmo, verificação da compreensão e pontualidade são abordados no mini-treinamento <em>Lesson Quality</em>; grupos caóticos, em <em>Lesson Organisation</em>; necessidades especiais, em <em>No Interest</em> e <em>Online Format</em>; problemas de conexão, em <em>Technical Issues</em>.</p>`)}
  `},
  {t:'📮 Como acionar o Client Service — e o que escrever', html:`
   <div class="card"><p>Você aciona o Client Service pelo BO: um relatório nas <strong>Tutors' Evaluations</strong> do aluno chega direto até eles. Faça isso <strong>no mesmo dia</strong> — uma família que se sente ignorada escala rápido.</p></div>
   ${timeline([
     {ic:'📝', label:'Reporte no BO', items:[
       'Perfil do aluno → <strong>Progress</strong> → <strong>Tutors\' Evaluations</strong> → <strong>Evaluate The Student</strong>.',
       '<strong>Problem Kind:</strong> o mais próximo — por exemplo, <em>«Student wants to drop the studies/asks for refund»</em>, <em>«Client wants to change the schedule»</em> ou <em>«Other»</em> para cobrança, saldos, grupos ou promessas do comercial.',
       'Escolha o grupo, escreva o comentário com os fatos e as palavras da própria família e confirme.'
     ]},
     {ic:'👩‍💼', label:'Avise seu Team Leader', items:[
       'No mesmo dia, com o link do aluno no BO. Combine com ele o que, se for o caso, você dirá à família em seguida.'
     ]},
     {ic:'🧭', label:'Outros canais, quando se aplicam', items:[
       '<strong>Problema técnico que você não consegue resolver:</strong> o <em>bot EU Request from Tutors</em> — ou os canais globais do Classroom e do Kodland Launcher.',
       '<strong>Créditos de aulas, descontos, um horário errado:</strong> seu Team Leader + Operations (<strong>@Yana</strong>, <strong>@Flavia</strong>) · Client Service: <strong>@Carlos Tamaoki</strong>.'
     ]}
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Como é um relatório útil — copie e complete</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Data:</strong> [data] · <strong>Grupo:</strong> [link do BO] · <strong>Aluno:</strong> [link do BO]<br>
   <strong>O que a família levantou:</strong> [ex.: uma parcela que não esperavam; o grupo mudou; «o comercial prometeu um grupo menor»]<br>
   <strong>Palavras da família:</strong> [literais]<br>
   <strong>O que eu disse:</strong> [ex.: reconheci e disse que o Atendimento ao Cliente vai ajudar — sem explicações nem promessas]<br>
   <strong>Contexto da aula:</strong> [presença, como o aluno está indo, qualquer informação relevante]<br>
   <strong>O que eu recomendaria verificar:</strong> [opcional — sua recomendação, a decisão é deles]</p></div>
   <div class="card"><p><strong>Pratique agora.</strong> Um responsável acabou de escrever: <em>«Vocês cobraram uma parcela que não combinamos e o grupo mudou sem que ninguém nos avisasse. Queremos nosso dinheiro de volta.»</em> Reporte nesta réplica do BO. No <strong>passo 4</strong>, escolha o Problem Kind <strong>«Student wants to drop the studies/asks for refund»</strong> e escreva os fatos e as palavras da própria família.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Reportar um caso ao Client Service</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Reportar um caso ao Client Service" loading="lazy"></iframe></div></div>
   ${co('co-star','🌱',`<p><strong>Por que funciona:</strong> O Client Service só pode resolver o que conhece. Um relatório completo e neutro, com as palavras da própria família, poupa uma ligação para eles — e faz a família receber uma resposta mais cedo.</p>`)}
  `}
 ],
 ix:{
  title:'Resolver ou reportar — avaliação do módulo',
  instr:'Classifique cada caso e escolha a melhor atitude. É necessário 70% para desbloquear o próximo módulo.',
  items:[
   {type:'sort', prompt:'Que tipo de problema é este?', card:`«Fomos cobrados por uma parcela que nunca combinamos.»`, zones:[{label:'🏢 Empresa e operações', fb:'Correto! Reconheça, não explique o pagamento e reporte ao Client Service no BO no mesmo dia.'},{label:'🧑‍🏫 A aula ou o tutor', fb:'Não exatamente. Nada aqui tem a ver com a aula. Cobrança vai para o Client Service.'},{label:'🔧 Técnico', fb:'Não exatamente. É uma questão de cobrança, não uma falha da plataforma.'}], correctZone:0},
   {type:'sort', prompt:'Que tipo de problema é este?', card:`«O tutor vai rápido demais para o meu filho de 7 anos e não verifica se ele entendeu.»`, zones:[{label:'🏢 Empresa e operações', fb:'Não exatamente. Este caso é sobre como a aula é conduzida. Parte dele cabe a você corrigir.'},{label:'🧑‍🏫 A aula ou o tutor', fb:'Correto! Diminua o ritmo das etapas, verifique a compreensão a partir da próxima aula e deixe um comentário no BO com o que você mudou.'},{label:'🔧 Técnico', fb:'Não exatamente. Nada falhou tecnicamente; é o ritmo da aula.'}], correctZone:1},
   {type:'choice', prompt:`Um responsável diz: «Depois de migrar para o Premium, só nos restam 19 aulas — isso é um golpe.» O que você responde?`, opts:[`«É assim que funciona o recálculo — as aulas Premium custam mais.»`,`«Entendo que isso é frustrante. Já encaminhei ao Atendimento ao Cliente, que vai ajudar vocês com isso.»`,`«Vocês têm razão, isso não parece justo. Vou pedir que devolvam suas aulas.»`], correct:1, fb:`Reconheça sem explicar, concordar nem prometer. O recálculo é o Client Service quem explica — depois reporte no BO e avise seu Team Leader.`},
   {type:'choice', prompt:`Qual é o relatório no BO mais útil para uma família insatisfeita com uma mudança de grupo?`, opts:[`«Responsável bravo de novo. Problema de grupo.»`,`«12/11, grupo [link do BO]. A mãe escreveu: 'Mudaram meu filho de grupo sem nos avisar, e agora ele não quer vir.' Reconheci e disse que o Atendimento ao Cliente entrará em contato com ela. Ele compareceu às 6 aulas e está indo bem.»`,`«A família reclama de tudo, por favor, cuidem disso.»`], correct:1, fb:`Fatos, as palavras da própria família, o que você disse e o contexto da aula. Neutro e completo — para que o Client Service possa agir sem ligar para você antes.`},
   {type:'sort', prompt:'Tudo bem ou melhor evitar?', card:`Um responsável pergunta quando o novo grupo vai começar. Você responde: «Provavelmente em duas semanas.»`, zones:[{label:'✅ Tudo bem', fb:'Não exatamente — uma data chutada vira promessa. Se não acontecer, a família perde a confiança de novo.'},{label:'🚫 Melhor evitar', fb:'Correto! Não informe datas que você não tem. O Atendimento ao Cliente vai ajudar com a data de início; reporte no BO.'}], correctZone:1}
  ]
 }
},
{id:'angry', numLabel:'Módulo 4', emoji:'🌋', color:'var(--coral)',
 title:'Responsáveis muito irritados ou ameaçadores',
 desc:'O que fazer quando um responsável está furioso, ameaça ou insulta — às vezes sem uma causa clara: manter a calma, manter os limites e o respeito, documentar e encaminhar ao Client Service.',
 obj:'Manter o equilíbrio diante de um responsável muito irritado, reconhecer sem discutir nem prometer, estabelecer limites com calma quando o respeito se perde, encaminhar a família ao Client Service e documentar o caso no BO no mesmo dia.',
 sections:[
  {t:'🌋 Quando a raiva é maior que o problema', html:`
   <div class="card"><p>Às vezes um responsável chega furioso e você não encontra o motivo: as aulas foram bem, nada de óbvio aconteceu. A raiva pode vir de uma longa cadeia de coisas que você nunca viu — uma cobrança, uma ligação que ninguém retornou, uma semana ruim. Você é simplesmente a pessoa que eles conseguem alcançar.</p></div>
   ${iconGrid([
     {ic:'🚫', html:`<strong>Não é seu trabalho ganhar a discussão</strong> — nem provar que a família está errada.`},
     {ic:'🙅', html:`<strong>Não é seu trabalho absorver insultos</strong> ou ameaças.`},
     {ic:'✅', html:`<strong>É seu trabalho</strong> manter a calma e o respeito, manter os limites, documentar o que aconteceu e passar ao Client Service.`}
   ])}
  `},
  {t:'🧘 Regule-se primeiro', html:`
   <div class="card"><p>A raiva é contagiosa — e a calma também. Antes de responder, cuide do seu próprio estado: é a primeira ferramenta que você tem.</p></div>
   ${iconGrid([
     {ic:'🌬️', html:`<strong>Respire antes de responder.</strong> Uma pausa de um segundo evita que você responda por impulso.`},
     {ic:'🔉', html:`<strong>Baixe a voz e desacelere</strong> em uma ligação. Por escrito, mantenha as frases curtas e neutras.`},
     {ic:'⏱️', html:`<strong>Mensagem escrita?</strong> Reconheça no mesmo dia — mas reserve alguns minutos antes de escrever e nunca responda com raiva.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Você não está sozinho.</strong> Avise seu Team Leader logo — você não precisa lidar sozinho com um responsável ameaçador.`}
   ])}
  `},
  {t:'🪜 O que fazer, passo a passo', html:`
   ${stepper([
     {ic:'🤝', title:'Reconheça o sentimento', html:`<p>Mostre que você ouviu, sem concordar com as acusações.</p><p><em>«Vejo que vocês estão muito chateados e quero garantir que isso chegue às pessoas certas.»</em></p>`},
     {ic:'❓', title:'Se a causa não estiver clara, pergunte uma vez', html:`<p>Uma pergunta aberta — não adivinhe e não interrogue.</p><p><em>«Poderiam me contar o que aconteceu, para que eu possa repassar com precisão?»</em></p>`},
     {ic:'🧊', title:'Não discuta, não se defenda, não prometa', html:`<p>Não corrija a versão deles, não culpe outras equipes nem a plataforma e não ofereça nada para acalmá-los.</p>`},
     {ic:'📞', title:'Encaminhe ao Client Service', html:`<p>É lá que estão as respostas e as opções.</p><p><em>«O Atendimento ao Cliente vai ajudar vocês com isso — já repassei a mensagem de vocês.»</em></p>`},
     {ic:'📝', title:'Documente no mesmo dia', html:`<p>Reporte no BO com as palavras exatas do responsável — inclusive qualquer ameaça — e avise seu Team Leader no mesmo dia.</p>`}
   ])}
  `},
  {t:'🛑 Limites e respeito', html:`
   <div class="card"><p>O respeito vale nos dois sentidos. Você se mantém respeitoso aconteça o que acontecer — e pode estabelecer um limite com calma quando a conversa deixa de ser respeitosa.</p></div>
   ${co('co-ok','🗣️',`<p><strong>Um limite que você pode dizer:</strong> <em>«Quero ajudar vocês e terei prazer em continuar quando pudermos conversar com respeito. Repassei a mensagem de vocês ao Atendimento ao Cliente, que entrará em contato.»</em> Em uma ligação, você pode encerrá-la com educação depois de dizer isso.</p>`)}
   ${doavoid(
     ['Mantenha um tom calmo e neutro, mesmo diante de insultos','Ignore o conteúdo de uma ameaça (advogado, avaliações, redes sociais) — reporte-a palavra por palavra','Continue tratando a criança com carinho: a criança nunca é responsável pela raiva do responsável','Se um responsável interromper a aula, seja breve: <em>«Vou garantir que sua mensagem chegue à nossa equipe depois da aula»</em> — e continue com os alunos'],
     ['Responder no mesmo tom, ironizar ou insultar','Discutir em um chat de grupo na frente de outras famílias','Prometer reembolso, compensação ou uma mudança para acalmá-los','Discutir o conflito na frente dos alunos']
   )}
   ${co('co-danger','🚨',`<p><strong>Ameaças, insultos ou assédio são sempre reportados</strong> — no BO, com as palavras exatas, e ao seu Team Leader no mesmo dia. Você não decide sozinho se continua conversando com aquela família.</p>`)}
  `},
  {t:'💬 Pratique', html:`
   ${chatMock({
     name:'Responsável', sub:'online', avatar:'😠', time:'21:15',
     msgs:[`Isto é um GOLPE. Nada funciona, ninguém responde e meu filho não aprendeu nada. Se eu não receber TODO o meu dinheiro de volta até amanhã, vou procurar um advogado e falar de vocês em todo lugar.`],
     title:'Como você responde?',
     text:'É tarde, a mensagem é agressiva e não há uma causa clara — suas aulas foram bem. Toque em cada resposta para ver o que acontece.',
     opts:[
      {t:`«Não somos um golpe. Seu filho compareceu a todas as aulas e está indo bem — por favor, verifique antes de nos acusar.»`, ok:false, fb:`Se defender transforma isso em discussão e deixa o responsável ainda mais irritado. Mesmo que seja verdade, não é seu papel provar que ele está errado.`},
      {t:`«Sinto muito que você esteja se sentindo assim e quero garantir que sua mensagem chegue às pessoas certas. Já encaminhei ao Atendimento ao Cliente, que vai ajudar com isso. Vou continuar dando o meu melhor por [aluno] nas nossas aulas.»`, ok:true, fb:`Calma, respeitosa e clara: você reconhece o sentimento, não discute a acusação, não responde à ameaça e encaminha ao Client Service. Depois, reporte no BO com as palavras exatas e avise seu Team Leader.`},
      {t:`«Por favor, não faça isso! Vou garantir que você receba seu dinheiro de volta.»`, ok:false, fb:`Reembolso não é algo que você possa prometer. Se não acontecer exatamente como você disse, a próxima mensagem será ainda mais furiosa.`},
      {t:`Vou deixar para lá — responder só vai piorar.`, reply:`<i>(sem resposta…)</i>`, ok:false, fb:`O silêncio confirma que «ninguém responde». Reconheça no mesmo dia, de forma breve e calma — e reporte.`}
     ]
   })}
  `}
 ],
 ix:{
  title:'Responsáveis muito irritados — avaliação do módulo',
  instr:'Escolha a melhor atitude ou classifique cada resposta. É necessário 70% para desbloquear a lista de verificação final.',
  items:[
   {type:'choice', prompt:`Um responsável liga gritando que «esta escola é um desastre», mas você não consegue entender o que aconteceu. O que você faz primeiro?`, opts:[`Explicar tudo o que deu certo nas aulas`,`Baixar a voz, reconhecer o quanto ele está chateado e perguntar uma vez: «Poderia me contar o que aconteceu, para que eu possa repassar com precisão?»`,`Desligar — você não precisa ouvir isso`], correct:1, fb:`Regule-se, reconheça o sentimento e faça uma única pergunta aberta. Depois, encaminhe ao Client Service e documente.`},
   {type:'sort', prompt:'Tesouro ou lixo? Esta é uma boa resposta?', card:`«Quero ajudar você e terei prazer em continuar quando pudermos conversar com respeito. Repassei sua mensagem ao Atendimento ao Cliente.»`, zones:[{label:'💎 Tesouro', fb:'Correto! Um limite calmo que preserva o respeito e aponta para o Client Service.'},{label:'🗑️ Lixo', fb:'Não exatamente. É um limite respeitoso, exatamente o que você pode dizer quando uma conversa deixa de ser respeitosa.'}], correctZone:0},
   {type:'choice', prompt:`Um responsável ameaça publicar avaliações negativas se não receber um reembolso. O que você faz com a ameaça?`, opts:[`Responder que avaliações não vão mudar nada`,`Prometer pedir o reembolso para que ele não publique`,`Não responder a ela — reportar no BO palavra por palavra e avisar seu Team Leader no mesmo dia`], correct:2, fb:`Você não negocia com uma ameaça nem discute com ela. Você a documenta com exatidão e deixa que seu Team Leader e o Client Service cuidem disso.`},
   {type:'sort', prompt:'Tesouro ou lixo? Esta é uma boa resposta?', card:`No chat do grupo, na frente de outras famílias: «Seu filho é quem nunca presta atenção, então não me culpem.»`, zones:[{label:'💎 Tesouro', fb:'Não exatamente — culpa a criança, discute em público e agrava o conflito.'},{label:'🗑️ Lixo', fb:'Correto! Nunca discuta em um chat de grupo nem culpe a criança. Reconheça rapidamente e leve o caso ao Client Service e ao seu Team Leader.'}], correctZone:1}
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
     'Garanto que os alunos usem o Google Chrome e um dispositivo adequado — nada de Safari, e nada de tablets para cursos como Roblox Studio',
     'Em problemas técnicos: até 10 minutos para resolver e depois comunico, documento e escalo — e abro um ticket no Client Service se acontecer em duas aulas seguidas',
     'Enquanto ajudo um aluno com um problema técnico, dou ao resto do grupo algo para trabalhar, para que ninguém fique esperando',
     'Diante de cobrança, parcelas, recálculos, saldos, mudanças de grupo, atrasos no início, suporte ou promessas do comercial e a licença do Minecraft, eu reconheço — não explico, não me defendo nem prometo',
     'Reporto esses casos ao Client Service no BO no mesmo dia (Tutors\' Evaluations → Evaluate The Student), com as palavras da própria família, e aviso meu Team Leader',
     'Uso o canal certo: o bot EU Request from Tutors para problemas técnicos; meu Team Leader e o Operations para créditos e descontos',
     'Quando o problema é a aula — ritmo, explicações, um grupo caótico, uma aula perdida, necessidades especiais, trocas de tutor — corrijo a minha parte a partir da próxima aula e reporto mesmo assim',
     'Com um responsável muito irritado ou ameaçador, eu me regulo, reconheço o sentimento, pergunto uma vez se a causa não estiver clara e encaminho ao Client Service',
     'Mantenho o respeito e estabeleço limites com calma; nunca discuto, respondo no mesmo tom nem prometo nada para acalmar um responsável',
     'Reporto ameaças e insultos palavra por palavra no BO e aviso meu Team Leader no mesmo dia — e continuo tratando a criança com carinho'
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
