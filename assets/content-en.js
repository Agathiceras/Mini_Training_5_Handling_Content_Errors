/* Mini_Training_5_Handling_Content_Errors - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='en';
const CONTENT = {
  flag:'🇬🇧', dir:'ltr',
  ui:{
    pageTitle:"Mini-Training · Handling Errors in Class — Kodland Tutor Training",
    logoSub:'Tutor Development Department',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Keeping a Lesson Steady Through <span class=\"h-pill\">Errors</span>",
    heroIntro:"You're seeing this because a family reported a lesson that felt full of mistakes and frustration. Most of this traces back to preparation, explanation, or genuine content errors — all fixable.",
    heroWork:"Work through 4 short modules. Each module check needs 70%+ to unlock the next. About 25–30 minutes total.",
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
 desc:'Why a lesson full of errors feels chaotic — and the rules that apply once a refund request has already come in.',
 obj:'Understand that most of these cases trace back to preparation, explanation or content issues — all with a concrete fix — and exactly what to do (and not do) once a refund request already exists.',
 sections:[
  {t:'😤 When a lesson feels like a string of errors', html:`
   <div class="card"><p>A lesson full of mistakes — the student's, the material's, or ones that show up mid-explanation — can quickly feel chaotic if there's no plan for handling them. Families notice this fast: it reads as "the class isn't working," even when the underlying cause is fixable in minutes.</p></div>
   ${co('co-idea','💡',`<p><strong>Most of this is preventable.</strong> A well-prepared lesson, a clear way of explaining things, and knowing how to report a genuine content error keep small mistakes from turning into a lesson that feels out of control.</p>`)}
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
  instr:'70% to unlock the final checklist.',
  items:[
   {type:'choice', prompt:'A student spots a genuine bug in the lesson\'s example code. What\'s your first move in the room?', opts:['Skip the activity without explanation, to save time','Name it calmly and turn it into a "let\'s solve it together" moment','Tell the group the platform is always full of mistakes'], correct:1, fb:'Calm and collaborative keeps the lesson from feeling chaotic — and models how to deal with bugs.'},
   {type:'sort', prompt:'Content error or technical problem?', card:'A line in the lesson\'s starter code has a typo and throws an error before anyone has changed anything.', zones:[{label:'🔧 Technical problem → follow the protocol', fb:'Not quite — the code itself is wrong, for everyone. That\'s a content error: work around it calmly and report it with the 🐞 icon in BO.'},{label:'🐞 Content error → report it in BO', fb:'Correct — the material itself is wrong. Work around it calmly, then report it with the 🐞 icon so it\'s fixed for every group.'}], correctZone:1},
   {type:'sort', prompt:'Content error or technical problem?', card:'A student\'s screen keeps freezing and their audio keeps cutting out mid-lesson.', zones:[{label:'🔧 Technical problem → follow the protocol', fb:'Correct — try a quick fix, keep the group working, and communicate, document and escalate if it repeats.'},{label:'🐞 Content error → report it in BO', fb:'Not quite — nothing is wrong with the material. A frozen screen and dropped audio are technical: follow the protocol.'}], correctZone:0},
   {type:'choice', prompt:'Where do you report a content error in BO?', opts:['In a message to the student\'s family','In the group\'s Check tab','With the 🐞 icon on the lesson row, inside the course record'], correct:2, fb:'The 🐞 icon on each lesson row opens the content-quality survey — that\'s what gets the material fixed.'},
   {type:'choice', prompt:'The same technical problem happens for the second lesson in a row. What changes?', opts:['Open a Client Service ticket the same day','Nothing — keep trying to fix it yourself','Wait one more lesson to be sure it\'s a pattern'], correct:0, fb:'A repeat means it\'s time to escalate to Client Service — and let the parent know someone will follow up.'}
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
     'While I help one student with a technical issue, I give the rest of the group something to work on, so nobody is left waiting'
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
