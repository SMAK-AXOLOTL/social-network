"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[653],{3653:function(t,e,s){s.r(e),s.d(e,{default:function(){return A}});var n=s(8683),r=s(4165),o=s(5861),a=s(8381),i={},c=s(9439),l="ProfileInfo_profile_block__5gJ0A",u="ProfileInfo_multiline__5LmDh",p="ProfileInfo_pic__KokOx",f="ProfileInfo_profile_pic__BrvFv",h=s(5008),d=s(1497),g=s(9343),x=function(t){var e=t.status,s=t.updateStatus,n=(0,a.useState)(!1),r=(0,c.Z)(n,2),o=r[0],i=r[1],l=(0,a.useState)(e),u=(0,c.Z)(l,2),p=u[0],f=u[1];(0,a.useEffect)((function(){f(e)}),[e]);return(0,g.jsx)("div",{children:o?(0,g.jsx)("input",{name:"status",autoFocus:!0,onBlur:function(){i(!1),s(p)},onChange:function(t){f(t.currentTarget.value)},value:p}):(0,g.jsx)("span",{onDoubleClick:function(){i(!0)},children:e||"User haven't set status yet"})})},m=function(t){if((0,a.useEffect)((function(){}),[t.profile]),!t.profile)return(0,g.jsx)(h.Z,{});return(0,g.jsx)("div",{className:l,children:(0,g.jsxs)("div",{children:[(0,g.jsx)("img",{src:t.profile.photos.large?t.profile.photos.large:d,className:f,alt:"Profile picture"}),t.isOwner&&(0,g.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&t.savePhoto(e.target.files[0])}}),(0,g.jsx)("div",{children:t.profile.fullName}),(0,g.jsx)("div",{className:u,children:(0,g.jsx)(x,{status:t.status,updateStatus:t.updateStatus,setStatus:t.setStatus})}),(0,g.jsx)("div",{children:function(){if(!0===t.profile.lookingForAJob)return(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{children:"I'm looking for a job!"}),t.profile.lookingForAJobDescription]})}()}),(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{children:"Contact me on:"}),Object.entries(t.profile.contacts).map((function(e){var s=(0,c.Z)(e,2),n=s[0];if(null!=s[1])switch(n){case"facebook":return(0,g.jsx)("a",{href:t.profile.contacts.facebook,children:(0,g.jsx)("img",{className:p,src:"https://lawshelf.com/assets/img/Facebook%20logo.png",alt:"facebook logo"})});case"website":return(0,g.jsx)("a",{href:t.profile.contacts.website,children:(0,g.jsx)("img",{className:p,src:"https://school-6-kholmsk.ru/wp-content/uploads/2018/09/\u0418\u043a\u043e\u043d\u043a\u0430-\u0441\u0430\u0439\u0442\u0430-1024x1024.png",alt:"website logo"})});case"vk":return(0,g.jsx)("a",{href:t.profile.contacts.vk,children:(0,g.jsx)("img",{className:p,src:"https://bioschool.pnpi.nrcki.ru/wp-content/uploads/2022/11/vkontakte-png-1024x1024.png",alt:"vk logo"})});case"twitter":return(0,g.jsx)("a",{href:t.profile.contacts.twitter,children:(0,g.jsx)("img",{className:p,src:"https://www.vhv.rs/dpng/d/551-5511916_2019-pro-exp-media-inc-circle-twitter-logo.png",alt:"twitter logo"})});case"instagram":return(0,g.jsx)("a",{href:t.profile.contacts.instagram,children:(0,g.jsx)("img",{className:p,src:"https://www.accosmetictattooing.com.au/wp-content/uploads/2022/11/instagram-300x300.png",alt:"instagram logo"})});case"youtube":return(0,g.jsx)("a",{href:t.profile.contacts.youtube,children:(0,g.jsx)("img",{className:p,src:"https://w7.pngwing.com/pngs/982/799/png-transparent-youtube-logo-youtube-logo-internet-marketing-subscribe-television-label-text.png",alt:"youtube logo"})});case"github":return(0,g.jsx)("a",{href:t.profile.contacts.github,children:(0,g.jsx)("img",{className:p,src:"https://e7.pngegg.com/pngimages/947/829/png-clipart-gray-and-blue-cat-illustration-github-computer-icons-logo-github-mammal-cat-like-mammal.png",alt:"github logo"})})}}))]})]})})},j=s(7605),v="AllPosts_posts__8paaK",b="AllPosts_posts_block__zlH57",_="Post_item__yGqB2",w="Post_like__GP3CZ",k="Post_dislike__oz-Ie",P=function(t){var e=(0,a.useState)(t.rating),s=(0,c.Z)(e,2),n=s[0],r=s[1],o=(0,a.useState)(0),i=(0,c.Z)(o,2),l=i[0],u=i[1];return(0,g.jsxs)("div",{className:_,children:[(0,g.jsx)("img",{src:"https://cs6.pikabu.ru/avatars/377/v377504.jpg?329968686"}),t.message,(0,g.jsxs)("div",{children:[(0,g.jsx)("button",{className:w,onClick:function(){if(1===l)r(n-1),u(0);else r(t.rating+1),u(1)},children:"Like"}),(0,g.jsx)("span",{children:n}),(0,g.jsx)("button",{className:k,onClick:function(){if(-1===l)r(n+1),u(0);else r(t.rating-1),u(-1)},children:"Dislike"})]})]})},Z=s(1956),N=s(9650),y=a.memo((function(t){var e=t.postsData.map((function(t){return(0,g.jsx)(P,{message:t.message,rating:t.rating})}));return(0,g.jsxs)("div",{className:b,children:["My posts",(0,g.jsx)("div",{children:(0,g.jsx)(N.J9,{initialValues:{newPostText:t.newPostText},onSubmit:function(e,s){""!==e.newPostText&&(t.updateNewPostText(e.newPostText),t.addPost(),s.setFieldValue("newPostText",""))},children:(0,g.jsxs)(N.l0,{children:[(0,g.jsx)(Z.oi,{label:"",name:"newPostText",type:"textarea",placeholder:"Enter new post here!",onBlur:function(e){t.updateNewPostText(e.target.value)}}),(0,g.jsx)("div",{children:(0,g.jsx)("button",{children:"New post"})})]})})}),(0,g.jsx)("div",{className:v,children:e})]})})),S=s(5484),T=(0,S.$j)((function(t){return{postsData:t.profilePage.postsData,newPostText:t.profilePage._newPostText}}),(function(t){return{updateNewPostText:function(e){t((0,j._M)(e))},addPost:function(){t((0,j.Wl)())}}}))(y),C=function(t){return(0,g.jsxs)("div",{className:i.content,children:[(0,g.jsx)(m,{isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus,setStatus:t.setStatus,savePhoto:t.savePhoto}),(0,g.jsx)(T,{})]})},I=s(7482),F=s(2524),A=(0,s(4479).qC)((0,S.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,userId:t.auth.authUserId}}),{getUserProfile:j.et,getStatus:j.lR,updateStatus:j.Nf,setStatus:j.Tf,savePhoto:j.Ju}),(function(t){return function(e){var s=(0,F.TH)(),r=(0,F.s0)(),o=(0,F.UO)();return(0,g.jsx)(t,(0,n.Z)((0,n.Z)({},e),{},{router:{location:s,navigate:r,params:o}}))}}),I.D)((function(t){var e=(0,F.UO)().userId;return(0,a.useEffect)((function(){var s=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(s){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getUserProfile(s),t.getStatus(s);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();s(e||t.userId)}),[e]),(0,g.jsx)("div",{children:(0,g.jsx)(C,(0,n.Z)({isOwner:!e},t))})}))},7482:function(t,e,s){s.d(e,{D:function(){return f}});var n=s(8683),r=s(5671),o=s(3144),a=s(136),i=s(516),c=s(8381),l=s(2524),u=s(5484),p=s(9343),f=function(t){var e=function(e){(0,a.Z)(c,e);var s=(0,i.Z)(c);function c(){return(0,r.Z)(this,c),s.apply(this,arguments)}return(0,o.Z)(c,[{key:"render",value:function(){return this.props.isAuth?(0,p.jsx)(t,(0,n.Z)({},this.props)):(0,p.jsx)(l.Fg,{to:"/login"})}}]),c}(c.Component);return(0,u.$j)((function(t){return{isAuth:t.auth.isAuth}}))(e)}},1956:function(t,e,s){s.d(e,{XZ:function(){return h},oi:function(){return f}});var n=s(8683),r=s(9439),o=s(5987),a=s(9650),i=(s(8381),"FormComponents_textInput__3Qh+h"),c="FormComponents_textInputErrorMessage__NARsf",l=s(9343),u=["label","handleBlur"],p=["children"],f=function(t){var e=t.label,s=t.handleBlur,p=(0,o.Z)(t,u),f=(0,a.U$)(p),h=(0,r.Z)(f,2),d=h[0],g=h[1];return(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:p.id||p.name,children:e}),(0,l.jsx)("input",(0,n.Z)((0,n.Z)({className:i,onBlur:s},d),p)),g.touched&&g.error&&(0,l.jsxs)("div",{className:c,children:[" ",g.error," "]})]})},h=function(t){var e=t.children,s=(0,o.Z)(t,p),i=(0,a.U$)((0,n.Z)((0,n.Z)({},s),{},{type:"checkbox"})),c=(0,r.Z)(i,2),u=c[0],f=c[1];return(0,l.jsxs)("div",{children:[(0,l.jsxs)("label",{className:"checkBoxInput",children:[(0,l.jsx)("input",(0,n.Z)((0,n.Z)({type:"checkbox"},u),s)),e]}),f.touched&&f.error&&(0,l.jsx)("div",{className:"error",children:f.error})]})}},1497:function(t,e,s){t.exports=s.p+"static/media/user_image_placeholder.4a6f1181bb0aabe229d5.png"}}]);
//# sourceMappingURL=653.a6c45f57.chunk.js.map