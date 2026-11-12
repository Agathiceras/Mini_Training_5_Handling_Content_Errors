/* Mini_Training_5_Handling_Content_Errors - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='en';
const CONTENT = {
  flag:'🇬🇧', dir:'ltr',
  ui:{
    heroCard1:"<b>At your own pace.</b> Your progress is saved in this browser.",
    heroCard2:"<b>Practice included.</b> Every module ends with a short check.",
    pbLabel:'modules complete',
    tapOpen:'Tap to open',
    tapFlip:'Tap to flip',
    lblSee:'What you see',
    lblDo:'What you do',
    lblSay:'What you can say',
    lblReport:'Where to report',
    lblAvoid:'Avoid',
    lblTip:'Tip',
    stepOf:'Step {i} of {n}',
    next:'Next',
    pageTitle:"Mini-Training · Handling Errors in Class — Kodland Tutor Training",
    logoSub:'Tutor Development Department',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Keeping a Lesson Steady Through <span class=\"h-pill\">Errors</span>",
    heroIntro:"You're seeing this because a family made a strongly negative refund request: a lesson that felt full of mistakes, a problem with the company's service, or a lot of anger without a clear cause. Here, we'll show you what's yours to fix, what to report to Client Service, and how to handle it calmly.",
    heroWork:"Work through 6 short modules. Each module check needs 70%+ to unlock the next. About 40–45 minutes total.",
    startBtn:"🚀 Start Training",
    pathLabel:'Your learning path',
    devTitle:'Dev: unlock all modules for review',
    backToPath:'Back to path',
    modulesPassed:'{done} / {total} modules passed',
    moduleN:'Module {n}',
    of:'of',
    locked:'🔒 Locked',
    passedBadge:'✅ Passed · {pct}%',
    reviewedBadge:'✅ Reviewed',
    startBadge:'▶ Start',
    reviewBadge:'▶ Review',
    objective:'Objective',
    startCheck:'▶ Start the module check',
    finishBtn:'▶ Finish the mini-training',
    doneBack:'✓ Done — back to path',
    ixBadge:'📋 Module check — 70% to unlock the next module',
    ixItemBadge:'📋 Module check — item {i} of {n}',
    scoreSoFar:'Score so far: {c} / {t}',
    continue:'Continue →',
    sortWrong:'Not quite — the right answer is "{label}".',
    resPassed:'Module passed!',
    resFailed:'Not quite there yet',
    resUnlocked:"You've unlocked the next module.",
    resDone:"You've completed this mini-training.",
    resNeed:'You need 70% to unlock the next module. Review the section above and try the check again.',
    resContinue:'Continue to learning path',
    resFinish:'Continue',
    resBack:'Back to path',
    resReview:'Review this module',
    doneEyebrow:'Mini-Training Complete',
    doneTitle:'🎉 Congratulations!',
    doneP1:"🎉 <strong>Congratulations! You've completed this mini-training.</strong>",
    doneP2:"You're all done here! Please return to the LMS training page where you accessed this mini-training to close out the assignment.",
    doneP3:"👉 <strong>If a check or assessment is listed directly below the training in the LMS, make sure to complete it and achieve a passing score</strong> — otherwise the assignment may remain incomplete.",
    doneP4:'Good luck! ❤️',
    doneP5:'',
    devUnlockAlert:'Dev mode: all modules are now unlocked for review.',
    devOn:'🔓 Dev mode ON — all modules unlocked',
    devOff:'🔒 Dev mode OFF — progress cleared',
    devBadge:'🔓 DEV MODE',
    doLabel:'✅ Do',
    avoidLabel:'🚫 Avoid',
    noticeLabel:'Notice:',
    cvSee:'What you see:',
    cvDo:'What you do:',
    dtExample:'Example from a real class',
    dtNext:'Next:',
    dtDone:"✅ That's all four areas. Next, classify what you see.",
    tlVideoTitle:'{label} — a real class example',
    tlVideoMeta:'Watch how this phase looks in a real lesson'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introduction', emoji:'🧩', color:'var(--coral)',
 title:'Why You\'re Here',
 desc:'Why a lesson full of errors feels chaotic, what else is usually behind a strongly negative family — and the rules that apply once a refund request has already come in.',
 obj:'Understand the main causes behind a strongly negative family — errors in the lesson, operational issues, lesson or tutor problems, and very angry parents — and exactly what to do (and not do) once a refund request already exists.',
 sections:[
  {t:'😤 When a lesson feels like a string of errors', html:`
   <div class="card"><p>A lesson full of mistakes — the student's, the material's, or ones that show up mid-explanation — can quickly feel chaotic if there's no plan for handling them. Families notice this fast: it reads as "the class isn't working," even when the underlying cause is fixable in minutes.</p></div>
   ${co('co-idea','💡',`<p><strong>Most of this is preventable.</strong> A well-prepared lesson, a clear way of explaining things, and knowing how to report a genuine content error keep small mistakes from turning into a lesson that feels out of control.</p>`)}
  `},
  {t:'🧭 A strongly negative family — what is usually behind it', html:`
   <div class="card"><p>Errors in the lesson are only one part of the picture. When a family is strongly negative, the cause is often outside the lesson altogether — and you still need to know what to do with it:</p></div>
   ${iconGrid([
     {ic:'🐞', html:`<strong>A lesson that felt full of errors</strong> — preparation, explanations, content or technical problems. <em>Modules 1 and 2.</em>`},
     {ic:'🏢', html:`<strong>Company and operational issues</strong> — billing, instalments, balances, group changes, start delays, support that doesn't answer, sales promises, the Minecraft licence. <em>Module 3.</em>`},
     {ic:'🧑‍🏫', html:`<strong>The lesson or the tutor</strong> — pace, explanations, a chaotic group, a missed lesson, connection, special needs, too many tutor changes. <em>Module 3.</em>`},
     {ic:'🌋', html:`<strong>A very angry or threatening parent</strong>, sometimes with no clear cause. <em>Module 4.</em>`}
   ])}
   ${co('co-ok','✅',`<p><strong>What's yours in every case:</strong> fix what's in your lesson, report the rest to Client Service the same day, and stay calm and respectful — whatever the tone of the family.</p>`)}
  `},
  {t:'🛟 If a refund request already exists', html:`
   <div class="card"><p>Everything above is about catching this early. But you may be opening this training because a family has <strong>already</strong> asked for a refund. The rules below apply no matter the reason — read them first, then use the rest of this training to understand what led here and what you can still do in the lesson.</p></div>
   ${co('co-idea','💡',`<p><strong>The request itself is created by Client Service, not by you</strong> — that part isn't yours to control. What's still yours is everything that happens in the lesson from here, and that's not nothing.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Say nothing about the request itself</strong> — not to the child, not to the family — unless Client Service explicitly asks you to say something specific. Your job now is the lesson, not the conversation.</p>`)}
  `},
  {t:'🎯 Your next lesson is the save attempt', html:`
   <div class="card"><p>You may not get a chance to change anything else. Treat the very next lesson with this child as the moment that decides it.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Give them a real turn.</strong> Not a meaningless question — a genuine moment where they're seen and they succeed.`},
     {ic:'🏆', html:`<strong>Build in an early, visible win.</strong> They should leave the lesson feeling capable, not behind.`},
     {ic:'👀', html:`<strong>Specific attention</strong> — make them feel noticed for something concrete, not generically praised.`},
     {ic:'🤐', html:`<strong>No mention of the request</strong> — even if the child brings it up, redirect warmly and keep teaching.`}
   ])}
  `},
  {t:'📮 Notify fast, and know the one safe line', html:`
   <div class="card"><p>You can find out a request exists through Client Service's comments on the child's profile in BO — there's no automatic system that notifies you. Once you know, what you've seen in your lessons is information Client Service doesn't have any other way.</p></div>
   ${numlist([
     'Leave a comment in BO the same day with exactly what you\'ve seen — dates and specifics, not impressions',
     'Include the family\'s own words, verbatim, if you have them',
     'Loop in your Team Leader the same day',
     'Never confirm that a refund has been approved, or discuss any amount'
   ])}
   ${co('co-ok','✅',`<p><strong>The message that's always safe to say:</strong> <em>"Customer Service will help you with this."</em> That's where your part of the conversation ends — Client Service takes it from there.</p>`)}
  `},
  {t:'🌱 Keep it up afterward', html:`
   <div class="card"><p>Whether the request is withdrawn, the child stays in your group, or moves to another tutor or format, keep giving extra care for the next few lessons. A save that holds for one lesson and then quietly goes back to normal often doesn't hold at all.</p></div>
  `}
 ]
},
{id:'manual', numLabel:'Module 1', emoji:'📘', color:'var(--coral)',
 title:'Using the Manual, and Explaining It Well',
 desc:'What the manual already gives you, why studying it the day before prevents most problems, and the two teaching moves — modelling and scaffolding — that help a concept land the first time.',
 obj:'Use the manual\'s objectives and suggested phrasing effectively, know where to get help before a lesson, and apply modelling and scaffolding to explain new concepts more clearly.',
 sections:[
  {t:'📘 What the manual already gives you', html:`
   <div class="card"><p>Every manual opens with the lesson's objectives and expected outcomes — that's what to focus your attention on, not just the sequence of steps. It also includes suggested phrases for explaining each concept, written by people who've thought carefully about how to introduce it.</p></div>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image1.png" alt="A lesson manual showing the lesson objectives and educational outcomes"><figcaption>📌 At the start of every manual you'll find the lesson's learning objectives, and what students are expected to achieve or learn by the end of it.</figcaption></figure>
   <figure class="mt-fig"><img class="mt-pic" src="Pictures_T5/image2.png" alt="A lesson manual page with a suggested phrase for the tutor"><figcaption>💬 If you're unsure how to handle a transition, introduce a topic or activity, or even explain it, the manual includes guide phrases that can help you think about how to say it.</figcaption></figure>
  `},
  {t:'⏳ The day before, not the hour before', html:`
   ${co('co-idea','💡',`<p><strong>Study and practise the lesson the day before</strong> — not one hour, and not thirty minutes before. That gap gives you real time to notice: code that no longer works, material that won't load, or an activity you don't fully understand yourself yet.</p>`)}
   ${co('co-star','⭐',`<p>If you find a gap, ask a mentor, your Team Leader, or other tutors in your course's Slack channel. Getting help there, the day before, is exactly what prevents problems from showing up live, in front of the student.</p>`)}
  `},
  {t:'🧑‍🏫 What actually helps a concept land', html:`
   <div class="card"><p>How you explain something matters as much as whether you explain it correctly. A concept introduced clearly the first time prevents most of the confusion-driven errors that follow.</p></div>
  `},
  {t:'🎬 Modelling: show it before they try it', html:`
   <div class="card"><p><strong>Modelling</strong> means demonstrating the technique yourself, on your own screen, before the student attempts it. Talk through your thinking out loud as you do it — the reasoning is often more valuable than the result.</p></div>
   <div class="vslot"><div class="vslot-top"><div class="vslot-ic">🎬</div><div><div class="vslot-title">Modelling, step by step</div><div class="vslot-meta">Example from a real class</div></div></div>
   <div class="vslot-frame" style="padding:0;overflow:hidden"><iframe src="https://drive.google.com/file/d/1IgaGbg64ClvTs1DgnOXMhp_IPFtgCGfM/preview" width="100%" height="380" style="border:none;display:block" allow="autoplay"></iframe></div>
   <div class="vslot-brief">In this video, you'll see how the tutor explains the task step by step, with short, simple instructions.</div></div>
  `},
  {t:'🪜 Scaffolding: support that comes down gradually', html:`
   <div class="card"><p><strong>Scaffolding</strong> means giving more support at the start of a new concept — a template, guided steps, working alongside them — and deliberately removing that support as they get more comfortable, until they're doing it independently.</p></div>
   ${co('co-idea','💡',`<p>The failure mode to avoid is the opposite: full support forever (they never build independence) or none at all from the start (they hit errors they don't have the tools to solve, and the lesson starts to feel chaotic).</p>`)}
  `}
 ],
 ix:{
  title:'Using the Manual & Explaining Well — module check',
  instr:'70% to unlock the next module.',
  items:[
   {type:'choice', prompt:'What should you focus on first when opening a new lesson\'s manual?', opts:['Only the exact steps, in order','The homework for next time','The objectives and expected outcomes'], correct:2, fb:'The objectives tell you what the lesson is actually for — the steps are just one way to get there.'},
   {type:'choice', prompt:'When should you study and practise a lesson?', opts:['The day before, not the hour before','Right before class, so it\'s fresh','Only if it\'s a topic you haven\'t taught before'], correct:0, fb:'A full day\'s gap gives you time to actually fix anything you find.'},
   {type:'choice', prompt:'What does "modelling" mean in a lesson?', opts:['Showing a finished example, without explaining how it was made','Demonstrating the technique yourself, thinking out loud, before the student tries it','Letting the student try first, then correcting them'], correct:1, fb:'Modelling is showing it first — including your own reasoning — before they attempt it.'},
   {type:'sort', prompt:'Is this scaffolding done right?', card:'Week 1: you give the student a template and guided steps. Week 3: you give only the goal, and let them build it on their own.', zones:[{label:'✅ Yes — that\'s scaffolding', fb:'Correct — support starts high and is deliberately removed as the student gains independence.'},{label:'❌ No — support should stay the same', fb:'Not quite — keeping full support forever stops the student from building independence. Removing it gradually is the point.'}], correctZone:0}
  ]
 }
},
{id:'contenterrors', numLabel:'Module 2', emoji:'🐞', color:'var(--coral)',
 title:'Content Errors and Technical Problems',
 desc:'What to do when the material itself is wrong or the tech breaks down: how to keep the room calm, report it correctly in BO, and troubleshoot without losing the rest of the group.',
 obj:'Handle a genuine content or translation error without letting it derail the lesson, know exactly how to report it in BO, and apply the fix-fast / communicate / document / escalate logic to technical failures.',
 sections:[
  {t:'🐞 Sometimes the material is the problem', html:`
   <div class="card"><p>Sometimes a lesson turns chaotic not because of the student, but because of a genuine error in the content or its translation — a broken piece of code, an instruction that doesn't match the tool, a mistranslated term. Here are the most common situations, and how you could respond:</p></div>
   ${iconGrid([
     {ic:'🐛', html:`<strong>A student notices something is mistranslated or misspelled.</strong> Move: name it out loud, matter-of-factly, and turn it into something you solve together rather than something that went wrong. Example: <em>"Good catch — looks like this line has a typo in it, let's figure out together what it should say."</em>`},
     {ic:'💻', html:`<strong>A student realizes the code doesn't work because of a writing/typo error.</strong> Example: <em>"Nice — looks like someone caught the hidden mistake. I wanted to see if anyone would notice it."</em>`},
     {ic:'🖼️', html:`<strong>Some images appear missing or won't load.</strong> Example: <em>"That's probably just a platform glitch, don't worry about it — I have the slides here so you can still see them."</em> Or: <em>"No worries, things like this happen, and you'll run into it plenty as programmers — for now, watch my screen."</em>`}
   ])}
  `},
  {t:'💛 Responding to Errors, Calmly', html:`
   <div class="card"><p>A content error is a small moment that can go one of two ways: a passing hiccup the class barely notices, or a crack in a student's confidence. What decides which one it becomes isn't the error itself — it's how you react to it in the first few seconds. Naming it out loud, without embarrassment or blame, tells students that mistakes are a normal, expected part of learning to code, and models exactly the mindset you want them to bring to their own bugs: notice it, stay curious, fix it, move on.</p></div>
   ${co('co-ok','✅',`<p><strong>Do say:</strong> <em>"Nice catch, that's on the material, not on you — let's work around it together."</em> Redirect attention to finding a solution as a team, and keep moving.</p>`)}
   ${co('co-danger','⛔',`<p><strong>Avoid:</strong> making the error a big deal, blaming the platform out loud in a way that undermines trust in the course, or spending so long on it that the rest of the lesson suffers.</p>`)}
  `},
  {t:'🖥️ Finding the material — and reporting errors — in BO', html:`
   <div class="card"><p>Every lesson's manual and presentation live inside BackOffice (BO), attached to the exact course record you teach from. The same place is where you report a content error, with the 🐞 icon on the lesson row. The simulation below walks you through it step by step.</p></div>
   ${co('co-danger','🚨',`<p><strong>Always check that the course ID you open matches the one your students are enrolled in.</strong> Similar courses exist side by side in BO — teaching from the wrong one can turn a lesson chaotic in seconds.</p>`)}
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Course material &amp; content errors</span><iframe src="Simulacion_BO_CourseMaterial.html" title="BO — Course material and content errors" loading="lazy"></iframe></div></div>
   ${co('co-star','⭐',`<p>Reporting an error doesn't just fix your lesson — it fixes it for every group that comes after yours with the same material.</p>`)}
  `},
  {t:'🔧 When the problem is technical: the protocol', html:`
   <div class="card"><p>Sometimes the string of errors in a lesson is technical: a frozen screen, a tool that won't load, a connection that keeps dropping. Technical problems are normal and can happen to both tutors and students — what matters is that they don't escalate.</p></div>
   ${co('co-idea','💡',`<p><strong>The golden rule.</strong> If you can't fix it yourself in <strong>10 minutes</strong>, stop trying in silence. <strong>Communicate → document → escalate.</strong> A parent who knows what's happening trusts you. A parent who doesn't, cancels.</p>`)}
   ${stepFlow([
     {ic:'⏱️', label:'First time in a lesson: try to fix it for up to 10 minutes'},
     {ic:'👩‍💼', label:'Still broken? Tell your Team Leader the same day — they decide on a make-up option'},
     {ic:'💬', label:'Message the parent within 30 minutes, warmly: you\'ve flagged it with your team'},
     {ic:'🎫', label:'Second lesson in a row? Open a Client Service ticket the same day'},
     {ic:'✅', label:'Once resolved: tell the parent and close the loop'}
   ])}
  `},
  {t:'🧑‍💻 Avoiding technical problems on your side', html:`
   <div class="card"><p>A tutor's technical issue can stall a lesson just as much as a student's. Most of them can be caught before the lesson even starts.</p></div>
   ${iconGrid([
    {ic:'🔌', html:`<strong>Test 30 minutes early.</strong> Check your internet connection, camera, and microphone before each lesson. If you notice a problem, let your Team Leader know.`},
    {ic:'📷', html:`<strong>Look for alternatives.</strong> If turning off your camera improves your connection, do that.`},
    {ic:'🎙️', html:`<strong>Have a backup mic.</strong> If your headset isn't working, try another option, such as your computer's built-in audio, and always turn on background-noise reduction in Classroom.`},
    {ic:'📶', html:`<strong>Check your drivers, and whether a VPN is active</strong> — VPNs tend to slow your connection down.`},
    {ic:'🧊', html:`<strong>Working with a resource-heavy tool like Blender?</strong> The course includes a guide in the first few lessons on how to configure it for better performance.`},
    {ic:'💻', html:`<strong>Free up RAM before class.</strong> Google Chrome gives the best experience with Classroom, but it also tends to use a lot of RAM — close tabs and programs you don't need right now.`},
    {ic:'👂', html:`<strong>Confirm it live.</strong> Before the lesson starts, check with your students that they can see and hear you properly — that way you catch technical issues early.`}
   ])}
  `},
  {t:'🎓 Supporting students with technical problems', html:`
   <div class="card"><p>Often, the technical problems students encounter in class are related to the fact that they are using a browser other than Google Chrome or the wrong devices for the course, such as trying to watch the class on a tablet, cell phone, or iPad. That's why it's important for you to know the minimum requirements so you can help them.</p></div>
   ${doavoid(
    ["Google Chrome, updated — the only fully compatible browser",
     "At least 4 GB RAM (8 GB for Blender or Unity)",
     "A stable connection, minimum 10 Mbps — a wired connection beats Wi-Fi when possible",
     "At least 5 GB of free storage — Unity and Blender need considerably more"],
    ["Safari — known bugs with the Kodland platform since the last update: buttons that don't respond, screens that don't load, errors on entry",
     "Tablets / iPads for courses like Roblox Studio or Unity — they need a real computer",
     "Assuming a Mac problem is disengagement before checking whether it's simply Safari"]
   )}
   ${co('co-idea','🍎',`<p>Watch for Mac + Safari specifically. If a Mac student can't get buttons to respond or the screen won't load, the fix is almost always: open the class in Google Chrome instead. Point families to google.com/chrome.</p>`)}
  `},
  {t:'⚖️ Without abandoning the rest of the class', html:`
   <div class="card"><p>The failure mode isn't just the technical issue itself — it's a tutor so focused on one student's problem that the rest of the group loses five or ten minutes of lesson.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>Set a time box.</strong> Give the affected student a quick fix attempt (switch to Chrome, refresh, restart), then move the group on and follow up with that student between activities or after class.`},
     {ic:'👥', html:`<strong>Give the group something to do</strong> the moment you start troubleshooting — don't leave them staring at a static screen.`},
     {ic:'🫂', html:`<strong>Stay calm, out loud.</strong> A calm "this happens sometimes, let's work around it" keeps the room steady while you fix it.`},
     {ic:'📝', html:`<strong>Leave a trace.</strong> If a device keeps causing the same problem, tell the family, leave a comment in BO, and loop in your Team Leader — instead of solving it again every lesson.`}
   ])}
  `}
 ],
 ix:{
  title:'Content Errors & Technical Problems — module check',
  instr:'70% to unlock the next module.',
  items:[
   {type:'choice', prompt:'A student spots a genuine bug in the lesson\'s example code. What\'s your first move in the room?', opts:['Skip the activity without explanation, to save time','Name it calmly and turn it into a "let\'s solve it together" moment','Tell the group the platform is always full of mistakes'], correct:1, fb:'Calm and collaborative keeps the lesson from feeling chaotic — and models how to deal with bugs.'},
   {type:'sort', prompt:'Content error or technical problem?', card:'A line in the lesson\'s starter code has a typo and throws an error before anyone has changed anything.', zones:[{label:'🔧 Technical problem → follow the protocol', fb:'Not quite — the code itself is wrong, for everyone. That\'s a content error: work around it calmly and report it with the 🐞 icon in BO.'},{label:'🐞 Content error → report it in BO', fb:'Correct — the material itself is wrong. Work around it calmly, then report it with the 🐞 icon so it\'s fixed for every group.'}], correctZone:1},
   {type:'sort', prompt:'Content error or technical problem?', card:'A student\'s screen keeps freezing and their audio keeps cutting out mid-lesson.', zones:[{label:'🔧 Technical problem → follow the protocol', fb:'Correct — try a quick fix, keep the group working, and communicate, document and escalate if it repeats.'},{label:'🐞 Content error → report it in BO', fb:'Not quite — nothing is wrong with the material. A frozen screen and dropped audio are technical: follow the protocol.'}], correctZone:0},
   {type:'choice', prompt:'Where do you report a content error in BO?', opts:['In a message to the student\'s family','In the group\'s Check tab','With the 🐞 icon on the lesson row, inside the course record'], correct:2, fb:'The 🐞 icon on each lesson row opens the content-quality survey — that\'s what gets the material fixed.'},
   {type:'choice', prompt:'The same technical problem happens for the second lesson in a row. What changes?', opts:['Open a Client Service ticket the same day','Nothing — keep trying to fix it yourself','Wait one more lesson to be sure it\'s a pattern'], correct:0, fb:'A repeat means it\'s time to escalate to Client Service — and let the parent know someone will follow up.'}
  ]
 }
},
{id:'operations', numLabel:'Module 3', emoji:'🏢', color:'var(--coral)',
 title:'Company and Lesson Problems: Report Them the Right Way',
 desc:'What to do when a family is upset about billing, balances, groups, start dates, support or sales promises — or about the lesson itself — and how to reach Client Service with a report in BO.',
 obj:'Tell apart what is yours to fix and what is yours to report, respond to operational complaints without explaining, defending or promising, fix the lesson problems that are yours, and report every case to Client Service in BO the same day.',
 sections:[
  {t:'🧭 Yours to fix, or yours to report?', html:`
   <div class="card"><p>A strongly negative family rarely complains about one thing. Often the anger is about the company — a charge, a balance, a group that changed — and you are simply the person they see every week. Before you answer, ask yourself which kind of problem it is:</p></div>
   ${patternCards([
     {ic:'🏢', title:'Company and operations', desc:'Billing, instalments, balances, groups, start dates, support, what sales promised, licences.', note:'<strong>Not yours to solve or explain.</strong> Acknowledge, report to Client Service in BO, tell your Team Leader.'},
     {ic:'🧑‍🏫', title:'The lesson or the tutor', desc:'Pace, explanations, a chaotic group, a missed lesson, connection, special needs, tutor changes.', note:'<strong>Partly yours.</strong> Fix what you can in the next lesson, and report it.'},
     {ic:'🔧', title:'Technical', desc:'Classroom, the platform, the course tools, a student\'s device.', note:'<strong>Follow the protocol</strong> in Module 2: 10 minutes, then communicate, document, escalate.'}
   ],3)}
  `},
  {t:'🏢 Operational and company issues — what you do, and what you say', html:`
   <div class="card"><p>Tap each issue. The pattern is always the same: <strong>acknowledge, don't explain, don't promise, report the same day.</strong> You don't have the full picture of a family's payments, contract or sales conversation — and a well-meant guess can turn into a promise the company can't keep.</p></div>
   ${symCards([
     {ic:'💳', title:'Billing and instalments',
      see:`An unexpected charge, an instalment the family didn't know about, a payment they think was already made.`,
      do:`Write down exactly what the family says, and report it to Client Service in BO the same day.`,
      say:`<em>"I understand this is worrying. I've passed it on to Customer Service, who will help you with this."</em>`,
      rep:`Client Service (BO report) + Team Leader + BO comment.`,
      avoid:`Explaining how payments work, or saying whether a charge is correct.`},
     {ic:'🔄', title:'Recalculation after a switch to Premium or another format',
      see:`The family moved to Premium, individual lessons or another format and is unhappy with how many lessons they have now.`,
      do:`Don't comment on the numbers. Report it to Client Service in BO, with the family's own words.`,
      say:`<em>"Customer Service will help you with this."</em>`,
      rep:`Client Service (BO report) + Team Leader + BO comment.`,
      avoid:`Calculating lessons yourself, or agreeing that it's unfair.`},
     {ic:'🎟️', title:'Disputed balance',
      see:`"We should have more lessons." "A lesson that didn't happen was deducted."`,
      do:`Check the attendance you marked in BO, then pass it to your Team Leader and Client Service the same day — Operations reviews balances and deductions.`,
      say:`<em>"Thank you for telling me. I've shared it with my team so it can be checked."</em>`,
      rep:`Team Leader + Client Service + BO comment (Operations: @Azzura Muzdalifa).`,
      avoid:`Promising lessons back, or saying the balance is right or wrong.`},
     {ic:'👥', title:'Group changes or a group that disbands',
      see:`The group moved, merged or closed, and the child lost classmates, a tutor or a familiar time.`,
      do:`Make the first lesson in the new situation feel welcoming. Report the family's concerns to Client Service in BO.`,
      say:`<em>"I understand the change isn't easy. I've shared it with my team so they can contact you."</em>`,
      rep:`Client Service (BO report) + Team Leader + BO comment.`,
      avoid:`Explaining why the group changed, or promising the old group back.`},
     {ic:'⏳', title:'Start delays',
      see:`The family has been waiting for a group to open, or the start date changed.`,
      do:`Don't give dates you don't have. Report it to Client Service in BO.`,
      say:`<em>"I understand the wait is frustrating. Customer Service will help you with the start date."</em>`,
      rep:`Client Service (BO report) + Team Leader + BO comment.`,
      avoid:`Guessing a start date, or blaming another team.`},
     {ic:'📞', title:'"Support isn\'t answering"',
      see:`The family says nobody replies to their messages or calls.`,
      do:`Acknowledge it — that frustration is real. Report it the same day, so Client Service knows the family is waiting.`,
      say:`<em>"I'm sorry you haven't had an answer. I've reported it today so that Customer Service gets back to you."</em>`,
      rep:`Client Service (BO report) + Team Leader + BO comment.`,
      avoid:`Saying "they never answer" or criticising the team — it confirms the family's worst fear.`},
     {ic:'🗣️', title:'"Sales promised us something else"',
      see:`Smaller groups, a different course, a level, a price or a result that "we were promised".`,
      do:`Write the family's words verbatim and report them. In the lesson, focus on what you can do for the child.`,
      say:`<em>"Thank you for telling me. I've shared it with my team, and Customer Service will contact you about it."</em>`,
      rep:`Client Service (BO report) + Team Leader + BO comment.`,
      avoid:`Confirming or denying what sales said, or making a new promise to fix it.`},
     {ic:'🧱', title:'Minecraft licence',
      see:`Questions or complaints about the Minecraft account or licence, or why the course works the way it does.`,
      do:`Help with what's in the lesson (the account the course requires, the setup). Anything about the licence itself goes to Client Service.`,
      say:`<em>"Customer Service will help you with the licence question."</em>`,
      rep:`Client Service (BO report) + Team Leader + BO comment.`,
      avoid:`Commenting on internal reasons, licences or changes to the course content.`}
   ])}
   ${co('co-ok','✅',`<p><strong>Acknowledging is always allowed.</strong> A short, warm reply — you've seen it, you understand, you've passed it on — needs nobody's approval. Explanations, options and anything about money wait for Client Service.</p>`)}
  `},
  {t:'🧑‍🏫 When the problem is the lesson', html:`
   <div class="card"><p>Some strong complaints are about the lesson itself. These are partly yours: fix what you can from the very next lesson — and still report it, so your Team Leader and Client Service aren't caught by surprise.</p></div>
   <div class="tbl-wrap"><table>
    <tr><th>What the family says</th><th>What you do</th><th>What you report</th></tr>
    <tr><td>"The method isn't right for his age"</td><td>Shorter steps, words they know, more showing — adapt to the age of the group</td><td>BO comment + Team Leader if the age gap in the group is large</td></tr>
    <tr><td>"The tutor moves on without explaining"</td><td>One instruction at a time, and check understanding before you move on</td><td>BO comment with what you changed</td></tr>
    <tr><td>"The group is chaotic"</td><td>Class rules from lesson 1, turns to speak, calm and firm management</td><td>BO comment + family informed of incidents</td></tr>
    <tr><td>"The tutor didn't show up" / "the lesson was postponed"</td><td>Never cancel or move a lesson on your own; tell your Team Leader as soon as you know</td><td>Team Leader the same day — they decide the make-up</td></tr>
    <tr><td>"The connection keeps failing"</td><td>Test your setup before every lesson; follow the technical protocol</td><td>Tech-support Slack channel + BO comment</td></tr>
    <tr><td>"The tutor wasn't ready for my child's special needs"</td><td>Routine, slower pace, smaller steps, other ways to answer; ask the family what helps</td><td>BO comment + Team Leader — you recommend, they decide on format</td></tr>
    <tr><td>"Too many tutor changes"</td><td>If you take over, read the BO comments, introduce yourself, keep the group's routines</td><td>Team Leader, so the family hears about changes in advance</td></tr>
   </table></div>
   ${co('co-idea','📚',`<p><strong>Want to go deeper?</strong> Pace, checking understanding and punctuality are covered in the <em>Lesson Quality</em> mini-training; chaotic groups in <em>Lesson Organisation</em>; special needs in <em>No Interest</em> and <em>Online Format</em>; connection problems in <em>Technical Issues</em>.</p>`)}
  `},
  {t:'📮 How to reach Client Service — and what to write', html:`
   <div class="card"><p>You reach Client Service through BO: a report in the student's <strong>Tutors' Evaluations</strong> reaches them directly. Do it <strong>the same day</strong> — a family that feels ignored escalates quickly.</p></div>
   ${timeline([
     {ic:'📝', label:'Report it in BO', items:[
       'Student profile → <strong>Progress</strong> → <strong>Tutors\' Evaluations</strong> → <strong>Evaluate The Student</strong>.',
       '<strong>Problem Kind:</strong> the closest one — for example <em>"Student wants to drop the studies/asks for refund"</em>, <em>"Client wants to change the schedule"</em>, or <em>"Other"</em> for billing, balances, groups or sales promises.',
       'Choose the group, write the comment with the facts and the family\'s own words, and confirm.'
     ]},
     {ic:'👩‍💼', label:'Tell your Team Leader', items:[
       'The same day, with a link to the student in BO. Agree with them what, if anything, you say to the family next.'
     ]},
     {ic:'🧭', label:'Other channels when they apply', items:[
       '<strong>Technical issue you can\'t solve:</strong> the tech-support Slack channel — <em>#uk-tsm-and-tutors</em> (UK) or <em>#usa-tsm-and-tutors</em> (USA).',
       '<strong>Lesson credits, deductions, a wrong schedule:</strong> your Team Leader + Operations (<strong>@Azzura Muzdalifa</strong>).'
     ]}
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 What a useful report looks like — copy and complete</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Date:</strong> [date] · <strong>Group:</strong> [BO link] · <strong>Student:</strong> [BO link]<br>
   <strong>What the family raised:</strong> [e.g. an instalment they didn't expect; the group changed; "sales promised a smaller group"]<br>
   <strong>Family's words:</strong> [verbatim]<br>
   <strong>What I said:</strong> [e.g. acknowledged and said Customer Service will help — no explanations or promises]<br>
   <strong>Lesson context:</strong> [attendance, how the student is doing, anything relevant]<br>
   <strong>What I'd recommend checking:</strong> [optional — your recommendation, their decision]</p></div>
   <div class="card"><p><strong>Practise it now.</strong> A parent has just written: <em>"You charged us an instalment we didn't agree to, and the group changed without anyone telling us. We want our money back."</em> Report it in this replica of BO. In <strong>step 4</strong>, choose the Problem Kind <strong>"Student wants to drop the studies/asks for refund"</strong> and write the facts and the family's own words.</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Report a case to Client Service</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Report a case to Client Service" loading="lazy"></iframe></div></div>
   ${co('co-star','🌱',`<p><strong>Why it works:</strong> Client Service can only fix what they know about. A complete, neutral report with the family's own words saves them a call — and gets the family an answer sooner.</p>`)}
  `}
 ],
 ix:{
  title:'Fix it or report it — module check',
  instr:'Sort each case and pick the best move. 70% to unlock the next module.',
  items:[
   {type:'sort', prompt:'Which kind of problem is this?', card:`"We were charged an instalment we never agreed to."`, zones:[{label:'🏢 Company and operations', fb:'Correct — acknowledge it, don\'t explain the payment, and report it to Client Service in BO the same day.'},{label:'🧑‍🏫 The lesson or the tutor', fb:'Not quite — nothing here is about the lesson. Billing goes to Client Service.'},{label:'🔧 Technical', fb:'Not quite — it\'s a billing question, not a platform failure.'}], correctZone:0},
   {type:'sort', prompt:'Which kind of problem is this?', card:`"The tutor goes too fast for my 7-year-old and doesn't check if he understood."`, zones:[{label:'🏢 Company and operations', fb:'Not quite — this one is about how the lesson is taught. Part of it is yours to fix.'},{label:'🧑‍🏫 The lesson or the tutor', fb:'Correct — slow the steps, check understanding from the next lesson on, and leave a BO comment with what you changed.'},{label:'🔧 Technical', fb:'Not quite — nothing failed technically; it\'s the pace of the lesson.'}], correctZone:1},
   {type:'choice', prompt:`A parent says: "After switching to Premium we only have 19 lessons left — that's a scam." What do you reply?`, opts:[`"That's how the recalculation works — Premium lessons cost more."`,`"I understand this is frustrating. I've passed it on to Customer Service, who will help you with this."`,`"You're right, that doesn't sound fair. I'll ask them to give you your lessons back."`], correct:1, fb:`Acknowledge without explaining, agreeing or promising. The recalculation is Client Service's to explain — then report it in BO and tell your Team Leader.`},
   {type:'choice', prompt:`Which is the most useful BO report for a family upset about a group change?`, opts:[`"Parent angry again. Group problem."`,`"12/11, group [BO link]. Mother wrote: 'They moved my son to another group without telling us, and now he doesn't want to come.' I acknowledged it and said Customer Service will contact her. He attended all 6 lessons and is doing well."`,`"The family complains about everything, please handle it."`], correct:1, fb:`Facts, the family's own words, what you said, and the lesson context. Neutral and complete — so Client Service can act without calling you first.`},
   {type:'sort', prompt:'Fine, or should you avoid it?', card:`A parent asks when the new group will start. You reply: "Probably in two weeks."`, zones:[{label:'✅ Fine', fb:'Not quite — a guessed date becomes a promise. If it doesn\'t happen, the family loses trust again.'},{label:'🚫 Avoid it', fb:'Correct — don\'t give dates you don\'t have. Customer Service will help with the start date; report it in BO.'}], correctZone:1}
  ]
 }
},
{id:'angry', numLabel:'Module 4', emoji:'🌋', color:'var(--coral)',
 title:'Very Angry or Threatening Parents',
 desc:'What to do when a parent is furious, threatening or insulting — sometimes with no clear cause: stay calm, keep the limits and the respect, document it, and refer them to Client Service.',
 obj:'Stay regulated with a very angry parent, acknowledge without arguing or promising, set calm limits when respect is lost, refer the family to Client Service, and document the case in BO the same day.',
 sections:[
  {t:'🌋 When the anger is bigger than the problem', html:`
   <div class="card"><p>Sometimes a parent arrives furious and you can't find the reason: the lessons went well, nothing obvious happened. The anger may come from a long chain of things you never saw — a charge, a call nobody returned, a bad week. You are simply the person they can reach.</p></div>
   ${iconGrid([
     {ic:'🚫', html:`<strong>It's not your job to win the argument</strong> — or to prove the family wrong.`},
     {ic:'🙅', html:`<strong>It's not your job to absorb insults</strong> or threats.`},
     {ic:'✅', html:`<strong>It is your job</strong> to stay calm and respectful, keep the limits, document what happened, and pass it to Client Service.`}
   ])}
  `},
  {t:'🧘 Regulate yourself first', html:`
   <div class="card"><p>Anger is contagious — and so is calm. Before you reply, take care of your own state: it's the first tool you have.</p></div>
   ${iconGrid([
     {ic:'🌬️', html:`<strong>Breathe before you answer.</strong> A one-second pause stops you replying on impulse.`},
     {ic:'🔉', html:`<strong>Lower your voice and slow down</strong> on a call. In writing, keep your sentences short and neutral.`},
     {ic:'⏱️', html:`<strong>Written message?</strong> Acknowledge it the same day — but take a few minutes before you write, and never reply in anger.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>You're not alone.</strong> Tell your Team Leader early — you don't have to handle a threatening parent by yourself.`}
   ])}
  `},
  {t:'🪜 What to do, step by step', html:`
   ${stepper([
     {ic:'🤝', title:'Acknowledge the feeling', html:`<p>Show you've heard them, without agreeing to the accusations.</p><p><em>"I can see you're very upset, and I want to make sure this reaches the right people."</em></p>`},
     {ic:'❓', title:'If the cause isn\'t clear, ask once', html:`<p>One open question — don't guess and don't interrogate.</p><p><em>"Could you tell me what happened, so I can pass it on accurately?"</em></p>`},
     {ic:'🧊', title:'Don\'t argue, defend or promise', html:`<p>Don't correct their version, don't blame other teams or the platform, and don't offer anything to calm them down.</p>`},
     {ic:'📞', title:'Refer them to Client Service', html:`<p>That's where the answers and the options are.</p><p><em>"Customer Service will help you with this — I've already passed on your message."</em></p>`},
     {ic:'📝', title:'Document it the same day', html:`<p>Report it in BO with the parent's exact words — including any threat — and tell your Team Leader the same day.</p>`}
   ])}
  `},
  {t:'🛑 Limits and respect', html:`
   <div class="card"><p>Respect works in both directions. You stay respectful whatever happens — and you can calmly set a limit when the conversation stops being respectful.</p></div>
   ${co('co-ok','🗣️',`<p><strong>A limit you can say:</strong> <em>"I want to help you, and I'll be glad to continue when we can speak respectfully. I've passed your message to Customer Service, who will contact you."</em> On a call, you can end it politely after saying this.</p>`)}
   ${doavoid(
     ['Keep a calm, neutral tone, even with insults','Ignore the content of a threat (a lawyer, reviews, social media) — report it word for word instead','Keep treating the child warmly: the child is never responsible for the parent\'s anger','If a parent interrupts the lesson, keep it short: <em>"I\'ll make sure your message reaches our team after the lesson"</em> — then continue for the students'],
     ['Answering back, sarcasm or insults','Arguing in a group chat in front of other families','Promising a refund, compensation or a change to calm them down','Discussing the conflict in front of the students']
   )}
   ${co('co-danger','🚨',`<p><strong>Threats, insults or harassment are always reported</strong> — in BO, with the exact words, and to your Team Leader the same day. You don't decide alone whether to keep talking to that family.</p>`)}
  `},
  {t:'💬 Practise it', html:`
   ${chatMock({
     name:'Parent', sub:'online', avatar:'😠', time:'21:15',
     msgs:[`This is a SCAM. Nothing works, nobody answers, and my son has learned nothing. If I don't get ALL my money back by tomorrow I'm going to a lawyer and posting everywhere about you.`],
     title:'How do you reply?',
     text:'It\'s late, the message is aggressive and there\'s no clear cause — your lessons have gone well. Tap each reply to see what happens.',
     opts:[
      {t:`“We're not a scam. Your son has attended every lesson and is doing well — please check before accusing us.”`, ok:false, fb:`Defending yourself turns it into an argument and makes the parent angrier. Even if it's true, it's not your job to prove them wrong.`},
      {t:`“I'm sorry you're feeling this way, and I want to make sure your message reaches the right people. I've passed it on to Customer Service, who will help you with this. I'll keep doing my best for [student] in our lessons.”`, ok:true, fb:`Calm, respectful and clear: you acknowledge the feeling, don't argue with the accusation, don't respond to the threat, and refer them to Client Service. Then report it in BO with the exact words and tell your Team Leader.`},
      {t:`“Please don't do that! I'll make sure you get your money back.”`, ok:false, fb:`A refund isn't yours to promise. If it doesn't happen exactly as you said, the next message will be even angrier.`},
      {t:`I'll leave it — answering will only make it worse.`, reply:`<i>(no reply…)</i>`, ok:false, fb:`Silence confirms "nobody answers". Acknowledge the same day, briefly and calmly — and report it.`}
     ]
   })}
  `}
 ],
 ix:{
  title:'Very angry parents — module check',
  instr:'Pick the best move or sort each reply. 70% to unlock the final checklist.',
  items:[
   {type:'choice', prompt:`A parent calls, shouting that "this school is a disaster", but you can't tell what happened. What do you do first?`, opts:[`Explain everything that has gone well in the lessons`,`Lower your voice, acknowledge how upset they are, and ask once: "Could you tell me what happened, so I can pass it on accurately?"`,`Hang up — you don't have to listen to this`], correct:1, fb:`Regulate yourself, acknowledge the feeling and ask one open question. Then refer them to Client Service and document it.`},
   {type:'sort', prompt:'Treasure or trash? Is this a good reply?', card:`"I want to help you, and I'll be glad to continue when we can speak respectfully. I've passed your message to Customer Service."`, zones:[{label:'💎 Treasure', fb:'Correct — a calm limit that keeps the respect and points to Client Service.'},{label:'🗑️ Trash', fb:'Not quite — this is a respectful limit, exactly what you can say when a conversation stops being respectful.'}], correctZone:0},
   {type:'choice', prompt:`A parent threatens to post bad reviews unless they get a refund. What do you do with the threat?`, opts:[`Reply that reviews won't change anything`,`Promise to ask for the refund so they don't post`,`Don't respond to it — report it in BO word for word and tell your Team Leader the same day`], correct:2, fb:`You don't negotiate with a threat or argue with it. You document it exactly and let your Team Leader and Client Service handle it.`},
   {type:'sort', prompt:'Treasure or trash? Is this a good reply?', card:`In the group chat, in front of other families: "Your son is the one who never pays attention, so don't blame me."`, zones:[{label:'💎 Treasure', fb:'Not quite — it blames the child, argues in public and escalates the conflict.'},{label:'🗑️ Trash', fb:'Correct — never argue in a group chat or blame the child. Acknowledge briefly, take it to Client Service and your Team Leader.'}], correctZone:1}
  ]
 }
},
{id:'checklist', numLabel:'Final Checklist', emoji:'✅', color:'var(--coral)',
 title:'Final Checklist',
 desc:'No quiz here — just the essentials from this mini-training, before you close it out.',
 obj:'Review the checklist below. This module is ungraded — read it, then finish the mini-training.',
 sections:[
  {t:'🛟 If a refund request already exists', html:`
   ${numlist([
     'I left a comment in BO the same day I learned of the request, and looped in my Team Leader',
     'My next lesson with this student was a real save attempt — a real turn, a visible win, specific attention, no mention of the request',
     'I never confirmed approval or discussed an amount — I used the one safe line and left the rest to Client Service'
   ])}
  `},  {t:'🌱 In every lesson', html:`
   ${numlist([
     'I study and practise each lesson the day before, starting from the objectives and expected outcomes in the manual',
     'I use the manual\'s suggested phrases to explain new concepts, and I ask my mentor, Team Leader or Slack channel about any gap before the lesson',
     'I model first: I demonstrate on my own screen and think out loud before students try it',
     'I scaffold: lots of support at the start (a template, guided steps), less as the student gains independence',
     'When the material has an error, I name it calmly and turn it into something we solve together',
     'I normalise mistakes out loud, so students see errors as a normal part of learning to code — not something to be embarrassed about',
     'I never make an error a big deal, blame the platform in front of students, or let it eat the rest of the lesson',
     'I report every content error with the 🐞 icon in BO, and check the course ID matches my students\' group',
     'I test my connection, camera and microphone 30 minutes before class, and close tabs and programs I don\'t need',
     'I make sure students use Google Chrome and a suitable device — not Safari, and no tablets for courses like Roblox Studio or Unity',
     'For technical problems: up to 10 minutes to fix, then communicate, document and escalate — and a Client Service ticket if it happens two lessons in a row',
     'While I help one student with a technical issue, I give the rest of the group something to work on, so nobody is left waiting',
     'For billing, instalments, recalculations, balances, group changes, start delays, support or sales promises and the Minecraft licence, I acknowledge — I don\'t explain, defend or promise',
     'I report those cases to Client Service in BO the same day (Tutors\' Evaluations → Evaluate The Student), with the family\'s own words, and I tell my Team Leader',
     'I use the right channel: the tech-support Slack channel for technical issues, my Team Leader and Operations for credits and deductions',
     'When the problem is the lesson — pace, explanations, a chaotic group, a missed lesson, special needs, tutor changes — I fix my part from the next lesson and still report it',
     'With a very angry or threatening parent, I regulate myself, acknowledge the feeling, ask once if the cause isn\'t clear, and refer them to Client Service',
     'I keep the respect and set calm limits; I never argue, answer back or promise anything to calm a parent down',
     'I report threats and insults word for word in BO and tell my Team Leader the same day — and I keep treating the child warmly'
   ])}
  `},  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>That's the whole mini-training.</strong> When you're ready, continue — then complete the DST in the LMS to close out the assignment.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
