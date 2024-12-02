const app = getApp();
Page({
    data: {
        clas_array: ['钢板', '圆管', '方管', '矩形管', '圆钢', '方钢', '角钢'],
        clas_index: 0,
        material_array: ['碳钢', '不锈钢', '铝合金'],
        P_array: ['7.85', '7.93', '2.73'],
        material_index: 0,
        text_result:"0.000",
        P: "7.85",
        T: "",
        W: "",
        A: "",
        B: "",
        D: "",
        L: "",
        TT: "show",
        WW: "show",
        AA: "hide",
        BB: "hide",
        DD: "hide",
        LL: "show"
      },
    clas_Change: function(e) {
        this.setData({clas_index: e.detail.value});
        this.clas_change_main();
        this.setData({text_result:"0.000"});
        this.setData({T: "",});
        this.setData({W: "",});
        this.setData({A: "",});
        this.setData({B: "",});
        this.setData({D: "",});
        this.setData({L: "",});
    },
    material_Change: function(e) {
        this.setData({material_index: e.detail.value});
        this.setData({P: this.data.P_array[e.detail.value]});
        this.get_result();
    },
    T_set: function(e) {this.setData({T: e.detail.value});this.get_result();},
    W_set: function(e) {this.setData({W: e.detail.value});this.get_result();},
    A_set: function(e) {this.setData({A: e.detail.value});this.get_result();},
    B_set: function(e) {this.setData({B: e.detail.value});this.get_result();},
    D_set: function(e) {this.setData({D: e.detail.value});this.get_result();},
    L_set: function(e) {this.setData({L: e.detail.value});this.get_result();},
 
    get_result(){   
        let P = this.data.P;
        let T = this.data.T;
        let W = this.data.W;
        let D = this.data.D;
        let L = this.data.L;
        let A = this.data.A;
        let B = this.data.B;
        let clas_index = this.data.clas_index;
        if (clas_index == 0) {
            if(T != "" && W != "" && L != ""){
                this.setData({text_result : Math.round(T*W*L*P)/1000}) ;
            }
        }
        if (clas_index==1) {
            if(T != "" && D != "" && L != ""){
                this.setData({text_result : Math.round(T*(D-T)*L*3.1415926*P)/1000});
            }
        }
        if (clas_index==2) {
            if(T != "" && A != "" && L != ""){
                this.setData({text_result : Math.round(T*(A-T)*4*L*P)/1000});
            }
        }
        if (clas_index==3) {
            if(T != "" && A != ""  && B != "" && L != ""){
                this.setData({text_result : Math.round(T*(A+B-T*2)*2*L*P)/1000});
            }
        }
        if (clas_index==4) {
            if(D != "" && L != ""){
                this.setData({text_result : Math.round(D*D*L*3.1415926/4*P)/1000});
            }
        }
        if (clas_index==5) {
            if(A != ""  && B != "" && L != ""){
                this.setData({text_result :Math.round(A*B*L*P)/1000});
            }
        }
        if (clas_index==6) {
            if(T != "" && A != ""  && B != "" && L != ""){
                this.setData({text_result :Math.round(T*(A+B-T)*L*P)/1000});
            }
        }
    },

    clas_change_main(){
        let clas_index = this.data.clas_index;
        this.setData({ TT: "hide"});
        this.setData({ WW: "hide"});
        this.setData({ AA: "hide"});
        this.setData({ BB: "hide"});
        this.setData({ DD: "hide"});
        this.setData({ LL: "hide"});
        if (clas_index==0) {
            this.setData({ TT: "show"});
            this.setData({ WW: "show"});
            this.setData({ LL: "show"});
        }
        if (clas_index==1) {
            this.setData({ TT: "show"});
            this.setData({ DD: "show"});
            this.setData({ LL: "show"});
        }
        if (clas_index==2) {
            this.setData({ TT: "show"});  
            this.setData({ AA: "show"});
            this.setData({ LL: "show"});
        }
        if (clas_index==3) {
            this.setData({ TT: "show"});
            this.setData({ AA: "show"});
            this.setData({ BB: "show"});
            this.setData({ LL: "show"});   
        }
        if (clas_index==4) {
            this.setData({ DD: "show"});
            this.setData({ LL: "show"});
        }
        if (clas_index==5) {
            this.setData({ AA: "show"});
            this.setData({ BB: "show"});
            this.setData({ LL: "show"});   
        }
        if (clas_index==6) {
            this.setData({ TT: "show"});
            this.setData({ AA: "show"});
            this.setData({ BB: "show"});
            this.setData({ LL: "show"}); 
        }
    },
  onShareAppMessage(e) {
    return {
      title: '金属计算器',
      path: 'metal/index'
    }
  }
})
