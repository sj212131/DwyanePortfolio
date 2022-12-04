(this.webpackJsonpdwyaneportfoilo=this.webpackJsonpdwyaneportfoilo||[]).push([[0],{12:function(e,s,a){},14:function(e,s,a){"use strict";a.r(s);var i=a(1),n=a.n(i),t=a(7),c=a.n(t),r=(a(12),a(2)),l=a(3),o=a(5),j=a(4),m=a(0),h=function(e){Object(o.a)(a,e);var s=Object(j.a)(a);function a(){return Object(r.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)(n.a.Fragment,{children:Object(m.jsxs)("header",{id:"home",children:[Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Education"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsxs)("h1",{className:"responsive-headline",children:["I am ",e.name,"."]}),Object(m.jsxs)("h3",{style:{color:"#fff",fontFamily:"sans-serif "},children:["I am a ",e.role,".",e.roleDescription]}),Object(m.jsx)("hr",{}),Object(m.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,target:"_blank",children:Object(m.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),a}(i.Component),d=function(e){Object(o.a)(a,e);var s=Object(j.a)(a);function a(){return Object(r.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)("section",{id:"about",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:"profile photo",width:"120",height:"120"})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"About Me"}),Object(m.jsx)("p",{children:e.aboutme}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:"Contact Details"}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsx)("span",{children:e.name}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:e.address}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:e.website})]})]})})]})]})})}}]),a}(i.Component),p=function(e){Object(o.a)(a,e);var s=Object(j.a)(a);function a(){return Object(r.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsxs)("section",{id:"resume",children:[Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Education"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(m.jsx)("div",{className:"row item",children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("h3",{children:e.UniversityName}),Object(m.jsxs)("p",{className:"info",children:[e.specialization,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]})]}),Object(m.jsx)("p",{children:e.Achievements})]})},e.YearOfPassing)}))})]}),Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Experience"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return Object(m.jsx)("div",{className:"row item",children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("h3",{children:e.CompanyName}),Object(m.jsxs)("p",{className:"info",children:[e.specialization,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsxs)("em",{className:"date",children:[e.MonthOfLeaving," ",e.YearOfLeaving]})]}),Object(m.jsx)("p",{children:e.Achievements})]})},e.CompanyName)}))})]}),Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Skills"})})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("p",{children:e.skillsDescription}),Object(m.jsx)("div",{className:"bars",children:Object(m.jsx)("ul",{className:"skills",children:e.skills&&e.skills.map((function(e){return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),Object(m.jsx)("em",{children:e.skillname})]},e.skillname)}))})})]})]})]})}}]),a}(i.Component),b=function(e){Object(o.a)(a,e);var s=Object(j.a)(a);function a(){return Object(r.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:"My Works"})}),Object(m.jsx)("div",{className:"nine columns collapsed",children:Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf bar",children:e.portfolio&&e.portfolio.map((function(e){return Object(m.jsx)("div",{className:"columns portfolio-item work-container ",children:Object(m.jsxs)("div",{className:"item-wrap",children:[Object(m.jsx)("a",{href:e.url,target:"_blank",children:Object(m.jsx)("img",{src:"".concat(e.imgurl),className:"item-img",alt:e.name})}),Object(m.jsx)("h5",{children:e.name})]})},e.name)}))})})]})})}}]),a}(i.Component),u=function(e){Object(o.a)(a,e);var s=Object(j.a)(a);function a(){return Object(r.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsx)("div",{className:"row section-head",children:Object(m.jsx)("div",{className:"ten columns",children:Object(m.jsx)("p",{className:"lead",children:"Get in Touch"})})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("aside",{className:"eigth columns footer-widgets",children:Object(m.jsxs)("div",{className:"widget",children:[Object(m.jsxs)("h4",{children:["Linked in :",e.linkedinId]}),Object(m.jsxs)("h4",{children:["email in :",e.email]})]})})})]})}}]),a}(i.Component),O=function(e){Object(o.a)(a,e);var s=Object(j.a)(a);function a(){return Object(r.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"twelve columns",children:Object(m.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,target:"_blank",children:Object(m.jsx)("i",{className:e.className})})},e.className)}))})}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),a}(i.Component),x={imagebaseurl:"https://sj212131.github.io/DwyaneProfile/",name:"Dwyane Piao",role:"full stack developer",linkedinId:"Dwyane Piao",email:"sj212131@hotmail.com",roleDescription:" React web developer, Python Data analyst, Operation & Business developer. Multiple languages speaker English, Korean & Chinese. Also, Stream Gaming!",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/dwyanepiao/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/sj212131",className:"fa fa-github"},{name:"youtube",url:"https://www.youtube.com/channel/UC9RrGtU6pPV8veS8UAjjdwA",className:"fa fa-youtube"},{name:"Dwyane Resume",url:"resumefile/Dwyane_Resume.pdf",className:"fas fa-id-card"}],aboutme:"React web developer, Python Data analyst, Operation & Business developer. Multiple languages speaker English, Korean & Chinese. Also, Stream Gaming!",address:"New York/ New Jersey",website:"https://dwyaneportfolio.herokuapp.com/",education:[{UniversityName:"Columbia University",specialization:"Engineering and Applied Science",MonthOfPassing:"July",YearOfPassing:"2021",Achievements:"Created Property CRM System & Online Casino"},{UniversityName:"Johnson & Wales University",specialization:"Master of Business",MonthOfPassing:"July",YearOfPassing:"2017",Achievements:"Family Business operation & resturant operation"},{UniversityName:"Johnson & Wales University",specialization:"Hospitality",MonthOfPassing:"July",YearOfPassing:"2015",Achievements:"Hospitality Senior, training over 20 interns per year "}],work:[{CompanyName:"DVORA Life",specialization:"Assistant Operation Manager & Front end Developer",MonthOfLeaving:"Current Job",YearOfLeaving:"2021",Achievements:"High-Performing Residential app for a portfolio of over 680 units"},{CompanyName:"Hotel Stanford New York",specialization:"Operation Supervisor",MonthOfLeaving:"April",YearOfLeaving:"2020",Achievements:"Supervised Front operation and HR Management"}],skillsDescription:"My skills",skills:[{skillname:"Javascript"},{skillname:"ReactJS"},{skillname:"Python"},{skillname:"MongoDB"},{skillname:"Node"},{skillname:"MySQL"},{skillname:"API"},{skillname:"Express"},{skillname:"jQuery"}],portfolio:[{name:"Prperty-Crm-system",description:" ",imgurl:"images/portfolio/New_propertcrm_logo.png",url:"https://property-management-crm.herokuapp.com/"},{name:"BlackJax Casino",description:" ",imgurl:"images/portfolio/New_Bj_logo.png",url:"https://ancient-wave-31889.herokuapp.com/"},{name:"Personality quiz",description:" ",imgurl:"images/portfolio/New_StarWar_logo.png",url:"https://sj212131.github.io/Star-Wars-Quiz/"},{name:"Employee Directory & Searching",description:" ",imgurl:"images/portfolio/New_Employeedir_logo.png",url:"https://randomemployeedir01.herokuapp.com/"},{name:"Google Book Search",description:" ",imgurl:"images/portfolio/New_BookSearch_logo.png",url:"https://googlebksearch.herokuapp.com/"},{name:"Tech Blog model",description:" ",imgurl:"images/portfolio/New_BlogModel_logo.png",url:"https://arcane-sierra-49666.herokuapp.com/"}]},f=function(e){Object(o.a)(a,e);var s=Object(j.a)(a);function a(){return Object(r.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(h,{resumeData:x}),Object(m.jsx)(d,{resumeData:x}),Object(m.jsx)(p,{resumeData:x}),Object(m.jsx)(b,{resumeData:x}),Object(m.jsx)(u,{resumeData:x}),Object(m.jsx)(O,{resumeData:x})]})}}]),a}(i.Component);c.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fc621e0c.chunk.js.map