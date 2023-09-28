(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{2:function(e){e.exports=JSON.parse('{"data":[{"question":"In a builder project, in which directory should we run the yarn command to install the library?","choices":["web/src","root/src","root/src/packages/blocks/core","src/packages/blocks/mobile"],"answer":"root/src/packages/blocks/core"},{"question":"In a builder project, what is the correct way to install a third-party library?","choices":["In the root/src directory, we should run \'yarn add packagename -W\'.","In the root/src/packages/blocks/core directory, we should run \'yarn add packagename\', and then specify the path of the package in the root/src/package.json file.","In the root/src/packages/block directory, we should run \'yarn add packagename -W\'.","None of these"],"answer":"In the root/src/packages/blocks/core directory, we should run \'yarn add packagename\', and then specify the path of the package in the root/src/package.json file."},{"question":"What is the command to start the React project and in which directory should we run this command?","choices":["web/src: \'yarn workspace web start\'","root/src: \'yarn workspace web start\'","root/src/packages/blocks/core: \'yarn workspace web start\'","src/packages/blocks/mobile: \'yarn workspace web start\'"],"answer":"root/src/packages/blocks/core: \'yarn workspace web _start\'"},{"question":"In the builder, what command should we use to check TypeScript errors, and in which directory should we run it?","choices":["web/src: \'yarn workspace web _compile\'","root/src: \'yarn workspace web compile\'","root/src/packages/blocks/core: \'yarn workspace web start\'","src/packages/blocks/mobile: \'yarn workspace web build\'"],"answer":"root/src: \'yarn workspace web compile\'"},{"question":"In the builder, what command should we use for production build, and in which directory should we run it?","choices":["web/src: \'yarn workspace web start\'","root/src: \'yarn workspace web build\'","root/src/packages/blocks/core: \'yarn workspace web _build\'","src/packages/blocks/mobile: \'yarn workspace web build\'"],"answer":"root/src: \'yarn workspace web build\'"},{"question":"In the builder, if we build our project for production deployment, in which directory will it generate?","choices":["root/src/packages/web/src","root/src","root/src/packages/blocks/core","src/packages/blocks/mobile"],"answer":"root/src/packages/web/src"},{"question":"In the builder for a React JS web app, in which directory do we define the routes?","choices":["root/src/packages/web/src/app.tsx","root/src/app.tsx","root/src/packages/blocks/core/app.tsx","src/packages/blocks/mobile/app.tsx"],"answer":"root/src/packages/web/src/app.tsx"},{"question":"In the builder, if we modify or update any blocks of a file, what should we make sure of regarding our code?","choices":["Our code should be inside the customization area (between \'customization area start\' and \'customization area end\').","Our code should be outside the customization area (not between \'customization area start\' and \'customization area end\').","We should update or customize the code as per our requirement.","None of these"],"answer":"Our code should be inside the customization area (between \'customization area start\' and \'customization area end\')."},{"question":"In the builder, for every block, why are we using a controller file?","choices":["We are using it for UI development.","We are using it for API integration logic and business logic.","We are using it for project setup.","None of these"],"answer":"We are using it for API integration logic and business logic."},{"question":"In the builder, which directory or file should we use to define API endpoints?","choices":["web/src/app.tsx","root/src/packages/blocks/index.tsx","root/src/packages/framework/src/config.js","src/packages/blocks/mobile/src/app.tsx"],"answer":"root/src/packages/framework/src/config.js"},{"question":"Which command is used to initialize a new React Native project?","choices":["npm start","npx create-react-app","npx react-native init","create-react-native-app"],"answer":"npx react-native init"},{"question":"What is the purpose of the react-native start command?","choices":["To start the React Native development server","To start the Android emulator","To start an iOS simulator","To start the debugging process"],"answer":"To start the React Native development server"},{"question":"What is the purpose of the Metro Bundler in React Native?","choices":["To bundle JavaScript code for production","To bundle native modules for the app","To bundle resources like images and fonts","To bundle app assets for deployment"],"answer":"To bundle JavaScript code for production"},{"question":"Which command is used to run a React Native app on an iOS simulator and android emulator or device?","choices":["npm start","npm run build-ios / npm run build-android","react-native run-ios / react-native run-android","npm run ios / npm run android"],"answer":"react-native run-ios / react-native run-android"},{"question":"Which file format should the Android app be packaged as before uploading to the Google Play Store?","choices":[".zip",".exe",".apk",".ipa"],"answer":".apk"},{"question":"Before submitting an app to the Google Play Store, what step should you take to test it with a select group of users?","choices":["Share the app\'s APK on a public website","Upload the app directly to the Play Store","Use alpha or beta testing tracks in the Google Play Console","Send the APK via email to potential testers"],"answer":"Use alpha or beta testing tracks in the Google Play Console"},{"question":"What is a provisioning profile used for in the context of iOS app publishing?","choices":["To restrict access to certain app features","To validate user accounts","To digitally sign the IPA for distribution","To optimize app performance"],"answer":"To digitally sign the IPA for distribution"},{"question":"Which file format should the iOS app be packaged as before uploading to the App Store?","choices":[".zip",".exe",".apk",".ipa"],"answer":".ipa"},{"question":"Which of the following is a step in the process of creating an IPA for app store submission?","choices":["Exporting the app from the App Store","Archiving the app in Xcode","Creating a ZIP file of the app\'s source code","Running the app on a physical device"],"answer":"Archiving the app in Xcode"},{"question":"What is the Git command to create a copy of a remote repository on your local machine?","choices":["git copy","git clone","git pull","git push"],"answer":"git clone"},{"question":"Which Git command is used to discard changes in a file and revert it to the last committed version?","choices":["git reset","git revert","git checkout","git discard"],"answer":"git checkout"},{"question":"What is a Git merge conflict?","choices":["A situation where Git automatically resolves conflicts","An error in Git that cannot be resolved","A situation where two branches have conflicting changes that need manual resolution","A Git command used to force a merge without checking for conflicts"],"answer":"A situation where two branches have conflicting changes that need manual resolution"},{"question":"Which Git command is used to create a new branch in a repository?","choices":["git clone","git branch","git commit","git merge"],"answer":"git branch"},{"question":"Which Git command is used to commit updated code in a repository?","choices":["git clone","git pull","git commit","git push"],"answer":"git commit"}]}')},22:function(e,t,o){},23:function(e,t,o){},32:function(e,t,o){"use strict";o.r(t);var c=o(0),a=o(9),s=o.n(a),n=(o(22),o(4)),i=(o(23),o(5)),r="QUIZ_START",l="QUIZ_RESET",u="QUIZ_NEXT",d="QUIZ_PREV",h="QUIZ_SUBMIT",p="QUIZ_TIMEOUT",b=o(2),j=o(1),m=function(e){var t=e.show,o=e.children,c=t?"modal display-block":"modal display-none";return Object(j.jsx)("div",{className:c,children:Object(j.jsx)("section",{className:"modal-main",children:o})})},g=o.p+"static/media/trophy.16e6df06.png",w=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.quizReducer})),o=t.answers,a=t.time,s=Object(c.useState)(0),r=Object(n.a)(s,2),u=r[0],d=r[1],h=Object(c.useState)(!1),p=Object(n.a)(h,2),w=p[0],f=p[1];Object(c.useEffect)((function(){var e=0;o.forEach((function(t,o){t.a===(null===b||void 0===b?void 0:b.data[o].answer)&&e++})),d(e)}),[]);return Object(j.jsxs)("div",{className:"endBox",children:[Object(j.jsx)("img",{src:g,className:"trophy",alt:"",srcset:""}),Object(j.jsx)("h3",{children:"Your results"}),Object(j.jsxs)("p",{children:[u," of ",null===b||void 0===b?void 0:b.data.length]}),Object(j.jsx)("p",{children:Object(j.jsxs)("strong",{children:[Math.floor(u/(null===b||void 0===b?void 0:b.data.length)*100),"%"]})}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Your time:"})," ",a,"sec"]}),Object(j.jsxs)("section",{children:[Object(j.jsx)("button",{className:"button",onClick:function(){return f(!0)},children:"Check your answers"}),Object(j.jsx)("button",{className:"button",style:{marginLeft:"20px"},onClick:function(){e((function(e){e({type:l,payload:null})}))},children:"Try again"})]}),Object(j.jsx)(m,{show:w,children:Object(j.jsxs)("section",{className:"modalBody",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("p",{className:"",children:"Your Answers"}),Object(j.jsx)("p",{style:{cursor:"pointer"},onClick:function(){return f(!1)},children:"X"})]}),Object(j.jsx)("section",{className:"content",children:Object(j.jsx)("ul",{children:o.map((function(e,t){return Object(j.jsxs)("li",{className:"mb-6",children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:e.q})}),Object(j.jsxs)("p",{className:e.a===(null===b||void 0===b?void 0:b.data[t].answer)?"bg-success":"bg-danger",children:["Your answer: ",e.a]}),e.a!==(null===b||void 0===b?void 0:b.data[t].answer)&&Object(j.jsxs)("p",{className:"bg-warning",children:["Correct answer: ",null===b||void 0===b?void 0:b.data[t].answer]})]},t)}))})})]})})]})},f=o(6),O=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return null===e||void 0===e?void 0:e.quizReducer})),o=t.activeQuestion,a=t.answers,s=t.time,r=Object(c.useState)(null===b||void 0===b?void 0:b.data[o]),l=Object(n.a)(r,2),m=l[0],g=l[1],w=Object(c.useState)(""),O=Object(n.a)(w,2),v=O[0],k=O[1],y=Object(c.useState)(""),x=Object(n.a)(y,2),q=x[0],N=x[1],I=Object(c.useState)(s),S=Object(n.a)(I,2),T=S[0],A=S[1];Object(c.useEffect)((function(){T>0?setTimeout((function(){return A(T-1)}),1e3):e((function(e){e({type:p,payload:null})}))}),[T]);var z=Object(c.useRef)();Object(c.useEffect)((function(){g(null===b||void 0===b?void 0:b.data[o]),void 0!=a[o]&&(N(a[o].a),console.log("RUn once"))}),[m,o]);var W=function(e){N(e.target.value),v&&k("")};return Object(j.jsxs)("div",{className:"questionBox",children:[Object(j.jsxs)("section",{className:"questionHead",children:[Object(j.jsxs)("h3",{children:["Question ",o+1,"/",null===b||void 0===b?void 0:b.data.length]}),Object(j.jsx)("h5",{children:T})]}),Object(j.jsxs)("section",{className:"middleBox",children:[Object(j.jsxs)("div",{className:"question",children:[Object(j.jsx)("p",{children:null===m||void 0===m?void 0:m.question}),v&&Object(j.jsx)("div",{children:v})]}),Object(j.jsx)("div",{className:"option",ref:z,children:null===m||void 0===m?void 0:m.choices.map((function(e,t){return Object(j.jsxs)("label",{className:"".concat(e===q?"selected":"text"),children:[Object(j.jsx)("input",{type:"radio",name:"answer",value:e,onChange:W,checked:e===q}),e]},t)}))})]}),Object(j.jsxs)("section",{className:"questionBottom",children:[o<=0?null:Object(j.jsx)("button",{className:"button",onClick:function(){k(""),e((function(e){e({type:d,payload:null})}))},children:"Prev"}),o+1>=(null===b||void 0===b?void 0:b.data.length)?Object(j.jsx)("button",{className:"button nextBtn",onClick:function(){if(""===q)return k("Please select one option!");e(function(e){var t=e.answers,o=e.time;return function(e){e({type:h,payload:{answers:t,time:o}})}}({answers:[].concat(Object(f.a)(a),[a[o]={q:m.question,a:q}]),time:s-T}))},children:"Submit"}):Object(j.jsx)("button",{className:"button nextBtn",onClick:function(t){if(""===q)return k("Please select one option!");var c=Object(f.a)(a);c[o]={q:m.question,a:q},e(function(e){var t=e.answers;return function(e){e({type:u,payload:t})}}({answers:c})),N("");var s=z.current.querySelector("input:checked");s&&(s.checked=!1)},children:"Next"})]})]})},v=function(){var e=Object(i.b)(),t=Object(c.useState)(1),o=Object(n.a)(t,2),a=o[0],s=o[1],l=Object(c.useState)(0),u=Object(n.a)(l,2),d=u[0],h=u[1],p=Object(c.useState)(60),b=Object(n.a)(p,2),m=b[0],g=b[1];return Object(c.useEffect)((function(){a>59&&s(1),d>59&&h(1)}),[a,d]),Object(c.useEffect)((function(){console.log(a),console.log(typeof a),NaN!==a&&NaN!==d&&g(60*a+d)}),[a,d]),Object(j.jsx)("div",{className:"startBox",children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Start the Quiz"}),Object(j.jsx)("p",{children:"Good luck!"}),Object(j.jsxs)("p",{children:["Time:\xa0\xa0",m,"sec"]}),Object(j.jsxs)("section",{children:[Object(j.jsxs)("label",{htmlFor:"",children:[Object(j.jsx)("input",{type:"number",className:"timeInput",value:a,onChange:function(e){return s(parseInt(e.target.value))}}),"min"]}),Object(j.jsxs)("label",{htmlFor:"",children:[Object(j.jsx)("input",{type:"number",className:"timeInput",value:d,onChange:function(e){return h(parseInt(e.target.value))}}),"sec"]})]}),Object(j.jsx)("button",{className:"startButton",onClick:function(){e(function(e){return function(t){t({type:r,payload:e})}}(m))},children:"START"})]})})})},k=function(){Object(i.b)();var e=Object(i.c)((function(e){return null===e||void 0===e?void 0:e.quizReducer})),t=e.step,o=e.answers;console.log(t),console.log(o);var a=Object(c.useState)(!1),s=Object(n.a)(a,2),r=(s[0],s[1]),l=Object(c.useState)(0),u=Object(n.a)(l,2),d=u[0];u[1];return Object(c.useEffect)((function(){3===t&&clearInterval(undefined)}),[t]),Object(j.jsxs)("div",{className:"App",children:[1===t&&Object(j.jsx)(v,{}),2===t&&Object(j.jsx)(O,{}),3===t&&Object(j.jsx)(w,{data:b.data,time:d,onAnswersCheck:function(){return r(!0)}})]})},y=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,34)).then((function(t){var o=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;o(e),c(e),a(e),s(e),n(e)}))},x=o(7),q=o(16),N=(o(28),o(15)),I=o.n(N),S=o(11),T=o(3),A={step:1,activeQuestion:0,answers:[],time:60},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,o=t.type,c=t.payload;switch(o){case r:return Object(T.a)(Object(T.a)({},e),{},{step:2,time:c});case u:return Object(T.a)(Object(T.a)({},e),{},{answers:Object(f.a)(c),activeQuestion:(null===e||void 0===e?void 0:e.activeQuestion)+1});case h:return Object(T.a)(Object(T.a)({},e),{},{step:3,answers:Object(f.a)(null===c||void 0===c?void 0:c.answers),time:null===c||void 0===c?void 0:c.time});case l:return Object(T.a)(Object(T.a)({},e),{},{step:1,activeQuestion:0,answers:[],time:60});case d:return Object(T.a)(Object(T.a)({},e),{},{activeQuestion:(null===e||void 0===e?void 0:e.activeQuestion)-1});case p:return Object(T.a)(Object(T.a)({},e),{},{time:0,step:3});default:return e}},W=Object(S.a)({storage:I.a,key:"a27"},Object(x.b)({quizReducer:z})),P=[];P=[].concat(Object(f.a)(P),[q.a]);var C=Object(x.c)(W,{},x.a.apply(void 0,Object(f.a)(P))),R=o(17),Q=Object(S.b)(C);s.a.render(Object(j.jsx)(i.a,{store:C,children:Object(j.jsx)(R.a,{loading:null,persistor:Q,children:Object(j.jsx)(k,{})})}),document.getElementById("root")),y()}},[[32,1,2]]]);
//# sourceMappingURL=main.bb921f19.chunk.js.map