/////////////input驗證
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);


/////////////form驗證


Vue.component('ValidationObserver', VeeValidate.ValidationObserver);


import zh_Tw from './zh.js';
console.log(zh_Tw);

 // Class 設定檔案(回饋訊息)
 VeeValidate.configure({
    classes: { //v-slot內的其中一個屬性
        valid: 'is-valid', //is-valid是bootstrap內的class ,前面的valid剛好就是官方文字的驗證通過
        invalid: 'is-invalid', //is-invalid是bootstrap內的class, 前面的invalid剛好就是官方文字的驗證不通過
    }
});
// 語系設定檔
VeeValidate.localize('tw', zh_Tw);

new Vue({
    el:"#app",
    data:{
        form:{
            email:"",
            username:"",
            phone:null,
            address:"",
            pay:"",
            message:"",

        }
        
    },
    methods: {
        clickMe(){
            console.log('送出'); //由於Vue會不管表單有沒有符合,直接送出,故需要額外的套件做驗證
        }
    },
})