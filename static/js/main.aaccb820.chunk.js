(this["webpackJsonpmcdonalds-app"]=this["webpackJsonpmcdonalds-app"]||[]).push([[0],[,,function(e,i,t){e.exports={sectionHeader:"CategoryMainSection_sectionHeader__1JZf2",itemCard:"CategoryMainSection_itemCard__2ANpA",itemInfo:"CategoryMainSection_itemInfo__1xxtc",itemTitle:"CategoryMainSection_itemTitle__2orEz",itemDescription:"CategoryMainSection_itemDescription__2N5Ew",itemPicture:"CategoryMainSection_itemPicture__TapCi",mainBackground:"CategoryMainSection_mainBackground__21Bw4"}},,function(e,i,t){e.exports={customizeTitle:"ItemPage_customizeTitle__1P09Q",optionCard:"ItemPage_optionCard__Yu95G",outerBorderToppings:"ItemPage_outerBorderToppings__JwaHh",outerBorderSizes:"ItemPage_outerBorderSizes__1-HWa",optionBlocks:"ItemPage_optionBlocks__3Ow7E",mainBackground:"ItemPage_mainBackground__3PXk0",addToCart:"ItemPage_addToCart__3WV1f",sectionTitle:"ItemPage_sectionTitle__BsoIS"}},,,,function(e,i,t){e.exports={backdrop:"Modal_backdrop__1EGa7",modal:"Modal_modal__3TUQF","slide-down":"Modal_slide-down__1dinj"}},function(e,i,t){e.exports={button:"CartButton_button__vmjFy",icon:"CartButton_icon__3oaQN",badge:"CartButton_badge__1TFFD",bump:"CartButton_bump__3JeRg"}},,function(e,i,t){e.exports={cartItem:"Cart_cartItem__2oTue",totalPrice:"Cart_totalPrice__-K2vJ",noItems:"Cart_noItems__26X1H"}},,function(e,i,t){e.exports={header:"Header_header__2IzLS",cartButton:"Header_cartButton__3Thhv"}},function(e,i,t){e.exports={itemAmount:"CartAddRemoveButtons_itemAmount__he1nc",itemPrice:"CartAddRemoveButtons_itemPrice__1YjhD"}},function(e,i,t){e.exports={items:"ItemForm_items__hzyDB",input:"ItemForm_input__2rkKP"}},,,,,,,,function(e,i,t){},function(e,i,t){},,,function(e,i,t){"use strict";t.r(i);var c=t(1),n=t.n(c),r=t(6),s=t.n(r),a=(t(23),t(24),t(5)),d=n.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),o=t(9),l=t.n(o),m=t(0),p=function(e){for(var i=Object(c.useState)(!1),t=Object(a.a)(i,2),n=t[0],r=(t[1],Object(c.useContext)(d)),s=0,o=0;o<r.items.length;o++)s+=+r.items[o].amount;var p="".concat(l.a.button," ").concat(n?l.a.bump:"");return Object(m.jsx)("div",{children:Object(m.jsxs)("button",{className:p,onClick:e.onOpenCart,children:[Object(m.jsx)("span",{className:l.a.icon,children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16",children:Object(m.jsx)("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})})}),Object(m.jsx)("span",{className:l.a.badge,children:s})]})})},u=t(13),j=t.n(u),h=t.p+"static/media/burger.86888cd1.jpg",O=t.p+"static/media/sandwich.c802aee4.jpg",b=t.p+"static/media/wrap23.65131d87.jpg",g=t.p+"static/media/chick.7ae3bfd3.jpg",f=t.p+"static/media/icecream.59fa547d.png",x=t.p+"static/media/cookie.d4c55f67.png",S=t.p+"static/media/hotchocolate.f8190893.jpg",v=t.p+"static/media/alcohol.4eaf092e.png",C=[{name:"Burger",description:"This is a delicious burger",picture:h,toppings:[{name:"Ketchup",price:0,isSelected:!0,id:"t1"},{name:"Mustard",price:0,isSelected:!1,id:"t2"},{name:"Relish",price:0,isSelected:!1,id:"t3"},{name:"Lettuce",price:0,isSelected:!0,id:"t4"},{name:"Tomato",price:0,isSelected:!0,id:"t5"},{name:"Bacon",price:1,isSelected:!1,id:"t6"}],sizes:[{name:"One Patty",price:0,isSelected:!0,id:"s0"},{name:"Double Patty",price:2,isSelected:!1,id:"s1"}],id:"m1",price:6},{name:"Sandwich",description:"This is a delicious Sandwich",picture:O,toppings:[{name:"Ketchup",price:0,isSelected:!1,id:"t7"},{name:"Mustard",price:0,isSelected:!1,id:"t8"},{name:"BBQ Sauce",price:0,isSelected:!1,id:"t9"}],sizes:[{name:"6 Inch",price:0,isSelected:!0,id:"1s2"},{name:"12 Inch",price:4,isSelected:!1,id:"2s3"}],id:"m2",price:7},{name:"Wrap",description:"This is a delicious Wrap",picture:b,toppings:[{name:"Ketchup",price:0,isSelected:!1,id:"t10"},{name:"Mustard",price:0,isSelected:!1,id:"t11"},{name:"BBQ Sauce",price:0,isSelected:!1,id:"t12"}],sizes:[],id:"m3",price:6},{name:"Chicken Nuggets",description:"This is a delicious Chicken Nuggets",picture:g,toppings:[{name:"Ketchup",price:0,isSelected:!1,id:"t13"},{name:"Mustard",price:0,isSelected:!1,id:"t14"},{name:"BBQ Sauce",price:0,isSelected:!1,id:"t15"}],sizes:[{name:"6 Nuggets",price:0,isSelected:!0,id:"s2"},{name:"12 Nuggets",price:4,isSelected:!1,id:"s3"},{name:"25 Nuggets",price:8,isSelected:!1,id:"s4"}],id:"m4",price:5}],A=[{name:"Fries",description:"This is a delicious Fries",picture:"data:image/png;base64,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",toppings:[],sizes:[{name:"Small",price:0,isSelected:!0,id:"s5"},{name:"Medium",price:1,isSelected:!1,id:"s6"},{name:"Large",price:2,isSelected:!1,id:"s7"}],id:"s1",price:2},{name:"Ice Cream",description:"This is a delicious Ice Cream",picture:f,toppings:[{name:"Vanilla",price:0,isSelected:!0,id:"t16"},{name:"Chocolate",price:0,isSelected:!1,id:"t17"}],sizes:[{name:"Single Scoop",price:0,isSelected:!0,id:"s8"},{name:"Double Scoop",price:1,isSelected:!1,id:"s9"}],id:"s2",price:2},{name:"Cookie",description:"This is a delicious Cookie",picture:x,toppings:[{name:"Chocolate Chips",price:0,isSelected:!1,id:"1t17"},{name:"Raisins",price:0,isSelected:!1,id:"2t17"}],sizes:[],id:"s3",price:1}],k=[{name:"Coffee",description:"This is a delicious Coffee",picture:"data:image/png;base64,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",id:"d0",price:1,sizes:[{name:"Small",price:0,isSelected:!0,id:"s11"},{name:"Medium",price:1,isSelected:!1,id:"s12"},{name:"Large",price:2,isSelected:!1,id:"s13"}],toppings:[{name:"Milk",price:0,isSelected:!0,id:"t18"},{name:"Sugar",price:0,isSelected:!0,id:"t19"},{name:"Caramel",price:.5,isSelected:!1,id:"t20"},{name:"Vanilla",price:.5,isSelected:!1,id:"t21"}]},{name:"Hot Chocolate",description:"This is a delicious Hot Chocolate",picture:S,id:"d1",price:1.99,sizes:[{name:"Small",price:0,isSelected:!0,id:"s14"},{name:"Medium",price:1,isSelected:!1,id:"s15"},{name:"Large",price:2,isSelected:!1,id:"s16"}],toppings:[{name:"Marshmellows",price:.25,isSelected:!1,id:"t22"}]},{name:"Soft Drink",description:"This is a delicious Soft Drink",picture:v,id:"d2",price:1,sizes:[{name:"Small",price:0,isSelected:!0,id:"s17"},{name:"Medium",price:1,isSelected:!1,id:"s18"},{name:"Large",price:2,isSelected:!1,id:"s19"}],toppings:[{name:"Extra Ice",price:0,isSelected:!1,id:"t23"}]}],N={name:null,description:null},z=function(e){return Object(m.jsxs)("div",{className:j.a.header,children:[Object(m.jsxs)("h1",{onClick:function(){e.onSelectCurrentFood(N)},children:[Object(m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(m.jsx)("path",{d:"M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}),Object(m.jsx)("path",{d:"M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"})]}),"  McDonalds"]}),Object(m.jsx)("div",{className:j.a.cartButton,children:Object(m.jsx)(p,{onOpenCart:e.onOpenCart})})]})},P=t(3),F=t(8),y=t.n(F),T=function(e){return Object(m.jsx)("div",{className:y.a.backdrop,onClick:e.onCloseCart})},w=function(e){return Object(m.jsx)("div",{className:y.a.modal,children:Object(m.jsx)("div",{className:y.a.content,children:e.children})})},H=function(e){var i=document.getElementById("overlays");return Object(m.jsxs)(m.Fragment,{children:[Object(r.createPortal)(Object(m.jsx)(T,{onCloseCart:e.onCloseCart}),i),Object(r.createPortal)(Object(m.jsx)(w,{children:e.children}),i)]})},I=t(18),E=(t(26),function(e){return Object(m.jsx)(I.a,{onClick:e.onClick,id:e.id,style:{backgroundColor:"rgb(0, 191, 255)",color:"black",boxShadow:"none"},children:e.children})}),D=t(14),Y=t.n(D),B=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(E,{onClick:e.addItem,children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:Object(m.jsx)("path",{d:"M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"})})}),Object(m.jsx)("span",{className:Y.a.itemAmount,children:e.itemAmount}),Object(m.jsx)(E,{onClick:e.removeItem,children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:Object(m.jsx)("path",{d:"M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"})})})]}),Object(m.jsx)("div",{className:Y.a.itemPrice})]})},W=t(11),Q=t.n(W),M=function(e){var i=Object(c.useContext)(d),t=i.items.length>0,n=Object(m.jsxs)("h3",{className:Q.a.totalPrice,children:["Total: $",i.totalAmount.toFixed(2)]}),r=i.items.map((function(e){var t=e.selectedToppings.map((function(e){return 0===e.toppingPrice?Object(m.jsx)("li",{children:e.toppingName}):Object(m.jsxs)("li",{children:[e.toppingName,": +$",e.toppingPrice.toFixed(2)]})})),c="";return e.selectedSize.length>0&&(c=e.selectedSize.map((function(e){return 0===e.sizePrice?Object(m.jsx)("h6",{children:e.sizeName}):Object(m.jsxs)("h6",{children:[e.sizeName,": +$",e.sizePrice.toFixed(2)]})}))),Object(m.jsxs)("div",{className:Q.a.cartItem,children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("h5",{children:[e.name," $",e.price]}),Object(m.jsx)("div",{children:c}),Object(m.jsx)("ul",{children:t})]}),Object(m.jsx)(B,{addItem:function(){i.addItem(Object(P.a)(Object(P.a)({},e),{},{amount:1}))},removeItem:function(){i.removeItem(Object(P.a)(Object(P.a)({},e),{},{amount:1}))},itemAmount:e.amount})]})}));return Object(m.jsxs)(H,{onCloseCart:e.onCloseCart,children:[!t&&Object(m.jsx)("h1",{className:Q.a.noItems,children:"Your Cart is Empty"}),t&&r,t&&n]})},L=function(e){return Object(m.jsx)("div",{onClick:function(){e.onSelectedFood(e.food)},children:e.children})},J=t(2),V=t.n(J),q=function(e){var i=C.map((function(i){return Object(m.jsx)(L,{food:i,onSelectedFood:e.onSelectCurrentFood,children:Object(m.jsxs)("div",{className:V.a.itemCard,children:[Object(m.jsxs)("div",{className:V.a.itemInfo,children:[Object(m.jsxs)("div",{className:V.a.itemTitle,children:[i.name," $",i.price]}),Object(m.jsx)("div",{className:V.a.itemDescription,children:i.description})]}),Object(m.jsx)("div",{className:V.a.itemPicture,children:Object(m.jsx)("img",{src:i.picture})})]})},i.id)})),t=A.map((function(i){return Object(m.jsx)(L,{food:i,onSelectedFood:e.onSelectCurrentFood,children:Object(m.jsxs)("div",{className:V.a.itemCard,children:[Object(m.jsxs)("div",{className:V.a.itemInfo,children:[Object(m.jsxs)("div",{className:V.a.itemTitle,children:[i.name," $",i.price]}),Object(m.jsx)("div",{className:V.a.itemDescription,children:i.description})]}),Object(m.jsx)("div",{className:V.a.itemPicture,children:Object(m.jsx)("img",{src:i.picture})})]})},i.id)})),c=k.map((function(i){return Object(m.jsx)(L,{food:i,onSelectedFood:e.onSelectCurrentFood,children:Object(m.jsxs)("div",{className:V.a.itemCard,children:[Object(m.jsxs)("div",{className:V.a.itemInfo,children:[Object(m.jsxs)("div",{className:V.a.itemTitle,children:[i.name," $",i.price]}),Object(m.jsx)("div",{className:V.a.itemDescription,children:i.description})]}),Object(m.jsx)("div",{className:V.a.itemPicture,children:Object(m.jsx)("img",{src:i.picture})})]})},i.id)}));return Object(m.jsxs)("div",{className:V.a.mainBackground,children:[Object(m.jsx)("div",{className:V.a.sectionHeader,children:Object(m.jsx)("h1",{children:"Main Items"})}),i,Object(m.jsx)("div",{className:V.a.sectionHeader,children:Object(m.jsx)("h1",{children:"Side Items"})}),t,Object(m.jsx)("div",{className:V.a.sectionHeader,children:Object(m.jsx)("h1",{children:"Drinks"})}),c]})},K=function(e){var i=Object(c.useRef)(),t=e.toppingsArray;Object(c.useEffect)((function(){i.current.checked&&e.toppingsArray.push({toppingName:e.name,toppingPrice:e.price})}),[]);var n,r=function(){if(!0===i.current.checked){if(function(e,i){for(var t=0;t<e.length;t++)if(e[t].toppingName===i)return!0}(t,e.name))return;e.toppingsArray.push({toppingName:e.name,toppingPrice:e.price})}else!1===i.current.checked&&e.toppingsArray.splice(function(e,i){for(var t=0;t<e.length;t++)if(e[t].toppingName===i)return t;return-1}(e.toppingsArray,e.name),1)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{onClick:function(){i.current.checked=!i.current.checked,r()},children:[Object(m.jsx)("h3",{children:e.name}),(n=e.price,0===n?Object(m.jsx)("h5",{}):Object(m.jsxs)("h5",{children:["+$",e.price.toFixed(2)]}))]}),Object(m.jsx)("input",{ref:i,type:"checkbox",onChange:r,defaultChecked:e.isSelected})]})},X=function(e){var i=Object(c.useRef)(),t=e.sizeArray;Object(c.useEffect)((function(){i.current.checked&&e.sizeArray.push({sizeName:e.name,sizePrice:e.price})}),[]);var n,r=function(){t[0].sizeName!=e.name&&(t.splice(0),t.push({sizeName:e.name,sizePrice:e.price}))};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{onClick:function(){t[0].sizeName!=e.name&&(i.current.checked=!i.current.checked,r())},children:[Object(m.jsx)("h3",{children:e.name}),(n=e.price,0===n?Object(m.jsx)("h5",{}):Object(m.jsxs)("h5",{children:["+$",e.price.toFixed(2)]}))]}),Object(m.jsx)("input",{ref:i,type:"radio",name:"size",onChange:r,defaultChecked:e.isSelected})]})},U=function(e){return Object(m.jsx)(E,{onClick:e.onClick,children:"Add to cart"})},G=t(15),Z=t.n(G),R=function(e){var i=Object(c.useContext)(d),t=Object(c.useRef)(),n="";return Object(m.jsxs)("div",{className:Z.a.items,children:[Object(m.jsx)("div",{className:Z.a.input,children:Object(m.jsx)("input",{ref:t,label:"Amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"})}),Object(m.jsx)("div",{children:Object(m.jsx)(U,{onClick:function(){var c=t.current.value;!function(){for(var i=[],t=[],c=0;c<e.toppingsArray.length;c++)i.push(e.toppingsArray[c].toppingName);for(var r="",s=0;s<i.length;s++)r+=i.sort()[s];1===e.sizeArray.length&&t.push(e.sizeArray[0].sizeName);for(var a="",d=0;d<t.length;d++)a+=t[d];n=e.selectedFood.name+r+a,console.log("New ID: "+n)}(),i.addItem({name:e.selectedFood.name,amount:c,price:e.selectedFood.price,description:e.selectedFood.description,picture:e.selectedFood.picture,selectedToppings:e.toppingsArray,selectedSize:e.sizeArray,id:n}),e.onSelectCurrentFood({name:null,description:null,picture:null,toppings:null,id:null})}})})]})},_=t(4),$=t.n(_),ee=function(e){var i=e.selectedFood.toppings,t=e.selectedFood.sizes,c=[],n=[],r=i.map((function(e){return Object(m.jsx)("div",{className:$.a.optionCard,children:Object(m.jsx)(K,{toppingsArray:c,name:e.name,price:e.price,isSelected:e.isSelected},e.id)})})),s=t.map((function(e){return Object(m.jsx)("div",{className:$.a.optionCard,children:Object(m.jsx)(X,{sizeArray:n,name:e.name,price:e.price,isSelected:e.isSelected},e.id)})}));return Object(m.jsxs)("div",{className:$.a.mainBackground,children:[Object(m.jsx)("div",{className:$.a.customizeTitle,children:Object(m.jsxs)("h1",{children:["Customize your ",e.selectedFood.name]})}),Object(m.jsxs)("div",{className:$.a.optionBlocks,children:[Object(m.jsxs)("div",{className:$.a.sizes,children:[Object(m.jsx)("h2",{className:$.a.sectionTitle,children:"Sizes"}),Object(m.jsx)("div",{className:$.a.outerBorderSizes,children:s})]}),Object(m.jsx)("div",{className:$.a.addToCart,children:Object(m.jsx)(R,{toppingsArray:c,sizeArray:n,selectedFood:e.selectedFood,onSelectCurrentFood:e.onSelectCurrentFood})}),Object(m.jsxs)("div",{className:$.a.toppings,children:[Object(m.jsx)("h2",{className:$.a.sectionTitle,children:"Toppings"}),Object(m.jsx)("div",{className:$.a.outerBorderToppings,children:r})]})]})]})},ie=function(e){var i=Object(c.useState)(!1),t=Object(a.a)(i,2),n=t[0],r=t[1],s=Object(c.useState)({name:null,description:null,picture:null,toppings:null,id:null}),d=Object(a.a)(s,2),o=d[0],l=d[1],p=function(e){l(e)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(z,{onOpenCart:function(){r(!0)},onSelectCurrentFood:p}),n&&Object(m.jsx)(M,{onCloseCart:function(){r(!1)}}),null===o.name&&Object(m.jsx)(q,{onSelectCurrentFood:p}),null!==o.name&&Object(m.jsx)(ee,{selectedFood:o,onSelectCurrentFood:p})]})},te=t(16),ce={items:[],totalAmount:0},ne=function(e,i){if(0===e.length)return-1;for(var t=0;t<e.length;t++)if(e[t].id===i)return t;return-1},re=function(e,i){if("ADD"===i.type){var t,c=0;if(-1===ne(e.items,i.item.id))t=e.items.concat(i.item);else{var n=Object(P.a)(Object(P.a)({},i.item),{},{amount:+i.item.amount+ +e.items[ne(e.items,i.item.id)].amount});(t=Object(te.a)(e.items))[ne(e.items,i.item.id)]=n}var r=i.item.selectedToppings,s=0;i.item.selectedSize.length>0&&(s=i.item.selectedSize[0].sizePrice);for(var a=0;a<r.length;a++)c+=Number(r[a].toppingPrice);var d=i.item.amount*(i.item.price+c+s);console.log("finalPrice: "+d);var o=e.totalAmount+d;return o.toFixed(2),{items:t,totalAmount:o}}if("REMOVE"===i.type){var l=Object(te.a)(e.items),m=0;i.item.selectedSize.length>0&&(m=i.item.selectedSize[0].sizePrice);for(var p=0,u=i.item.selectedToppings,j=0;j<u.length;j++)p+=Number(u[j].toppingPrice);var h=e.items[ne(e.items,i.item.id)],O=ne(e.items,i.item.id);if(1==h.amount)l.splice(O,1);else{var b=Object(P.a)(Object(P.a)({},h),{},{amount:h.amount-1});l[O]=b}return{items:l,totalAmount:e.totalAmount-h.price-p-m}}},se=function(e){var i=Object(c.useReducer)(re,ce),t=Object(a.a)(i,2),n=t[0],r=t[1],s={items:n.items,totalAmount:n.totalAmount,addItem:function(e){r({type:"ADD",item:e})},removeItem:function(e){r({type:"REMOVE",item:e})}};return Object(m.jsx)(d.Provider,{value:s,children:e.children})};var ae=function(){return Object(m.jsx)(se,{children:Object(m.jsx)(ie,{})})},de=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(i){var t=i.getCLS,c=i.getFID,n=i.getFCP,r=i.getLCP,s=i.getTTFB;t(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(ae,{})}),document.getElementById("root")),de()}],[[27,1,2]]]);
//# sourceMappingURL=main.aaccb820.chunk.js.map