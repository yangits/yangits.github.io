const app = getApp();
Page({
    data: {
        home: "计算重量",
        clas_array: ['钢板', '圆管', '方管', '矩形管', '圆钢', '方钢', '角钢'],
        clas_index: "0",
        material_array: ['碳钢', '不锈钢', '铝合金'],
        P_array: ['7.85', '7.93', '2.73'],
        material_index: "0",
        kg_result:"0.000",
        N_result:"0.000",
        P: "7.85",
        T: "",
        W: "",
        A: "",
        B: "",
        D: "",
        L: "",
        N: "",
        KG: "",
        jskg: "show",
        jssl: "hide",
        TT: "show",
        WW: "show",
        AA: "hide",
        BB: "hide",
        DD: "hide",
      },

    home_zl() {
      this.setData({ 
        home: "计算重量",
        jskg: "show",
        jssl: "hide"});
        this.get_result();
    },
    home_sl() {
      this.setData({ 
        home: "计算数量",
        jskg: "hide",
        jssl: "show"});
        this.get_result();
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
    N_set: function(e) {this.setData({N: e.detail.value});this.get_result();},
    KG_set: function(e) {this.setData({KG: e.detail.value});this.get_result();},
 
    get_result(){   
      let P = this.data.P;
      let T = this.data.T;
      let W = this.data.W;
      let D = this.data.D;
      let L = this.data.L;
      let A = this.data.A;
      let B = this.data.B;
      let N = this.data.N;
      let KG = this.data.KG;
      let home = this.data.home;
      let clas_index = this.data.clas_index;
      if (home=="计算重量"){
        if (N == "" || N == "0"){N=1};
        switch(clas_index){
          case "0":
            if(T != "" && W != "" && L != ""){
              this.setData({kg_result : (T*W*L*P*N/1000).toFixed(3)});
            }else{this.setData({kg_result : "0.000"});};break;
          case "1":
            if(T != "" && D != "" && L != ""){
                this.setData({kg_result : (T*(D-T)*L*3.1415926*P*N/1000).toFixed(3)});
            }else{this.setData({kg_result : "0.000"});};break;
          case "2":
            if(T != "" && A != "" && L != ""){
                this.setData({kg_result : (T*(A-T)*4*L*P*N/1000).toFixed(3)});
            }else{this.setData({kg_result : "0.000"});};break;
          case "3":
            if(T != "" && A != ""  && B != "" && L != ""){
                this.setData({kg_result : (T*(A-B*(-1)-T*2)*2*L*P*N/1000).toFixed(3)});
            }else{this.setData({kg_result : "0.000"}) ;};break;
          case "4":
            if(D != "" && L != ""){
                this.setData({kg_result : (D*D*L*3.1415926/4*P*N/1000).toFixed(3)});
            }else{this.setData({kg_result : "0.000"}) ;};break;
          case "5":
            if(A != ""  && B != "" && L != ""){
                this.setData({kg_result :(A*B*L*P*N/1000).toFixed(3)});
            }else{this.setData({kg_result : "0.000"}) ;};break;
          case "6":
            if(T != "" && A != ""  && B != "" && L != ""){
                this.setData({kg_result :(T*(A-B*(-1)-T)*L*P*N/1000).toFixed(3)});
            }else{this.setData({kg_result : "0.000"}) ;};break;
        };
      }else{
        if (KG == ""){KG=0};
        switch(clas_index){
          case "0":
            if(T != "" && W != "" && L != ""){
                this.setData({N_result : (KG/(T*W*L*P)*1000).toFixed(3)}) ;
            }else{this.setData({N_result : "0.000"}) ;};break;
          case "1":
            if(T != "" && D != "" && L != ""){
                this.setData({N_result : (KG/(T*(D-T)*L*3.1415926*P)*1000).toFixed(3)});
            }else{this.setData({N_result : "0.000"}) ;};break;
          case "2":
            if(T != "" && A != "" && L != ""){
                this.setData({N_result : (KG/(T*(A-T)*4*L*P)*1000).toFixed(3)});
            }else{ this.setData({N_result : "0.000"}) ; }; break;
          case "3":
            if(T != "" && A != ""  && B != "" && L != ""){
                this.setData({N_result : (KG/(T*(A-B*(-1)-T*2)*2*L*P)*1000).toFixed(3)});
            }else{ this.setData({N_result : "0.000"}) ; };break;
          case "4":
            if(D != "" && L != ""){
                this.setData({N_result : (KG/(D*D*L*3.1415926/4*P)*1000).toFixed(3)});
            }else{ this.setData({N_result : "0.000"}) ; }; break;
          case "5":
            if(A != ""  && B != "" && L != ""){
                this.setData({N_result :(KG/(A*B*L*P)*1000).toFixed(3)});
            }else{ this.setData({N_result : "0.000"}) ;};break;
          case "6":
            if(T != "" && A != ""  && B != "" && L != ""){
                this.setData({N_result :(KG/(T*(A-B*(-1)-T)*L*P)*1000).toFixed(3)});
            }else{ this.setData({N_result : "0.000"}) ;};break;
        };
      };
    },
    clas_Change: function(e) {
      this.setData({clas_index: e.detail.value});
      this.clas_change_main();
      this.setData({kg_result:"0.000",N_result:"0.000",T: "",W: "",A: "",B: "",D: "",L: "",N: "",KG: ""});
    },
    clas_change_main(){
      let clas_index = this.data.clas_index;
      this.setData({ TT: "hide",WW: "hide",AA: "hide",BB: "hide",DD: "hide"});
      switch(clas_index){
        case "0": this.setData({ TT: "show",WW: "show"});break;
        case "1": this.setData({ TT: "show", DD: "show"});break;
        case "2": this.setData({ TT: "show",AA: "show"});break;
        case "3": this.setData({ TT: "show",AA: "show",BB: "show"});break;
        case "4": this.setData({ DD: "show",});break;
        case "5": this.setData({ AA: "show",BB: "show"});break;
        case "6": this.setData({ TT: "show",AA: "show",BB: "show"});break;
      };
    },
  onShareAppMessage(e) {
    return {
      title: '金属计算器',
      path: 'metal/index'
    }
  }
})
