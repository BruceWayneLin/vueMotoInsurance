// my-modal
Vue.component('my-modal', {
    template: `
        <div class="container">
            <!-- Modal -->
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">

                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">CareLine</h4>
                        </div>
                        <div class="modal-body">
                            <div class="content-modal">
                                <p>您已選擇了124cc~249cc機車保險方案，若要更改cc數，將會改變方案價格，請回首頁重新選擇方案，謝謝。</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">回首頁</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">關閉並回表單</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,
    data : function () {
        return {

        }
    },
})

Vue.component('thankspage', {
    template: `
        <div class="contaienr thanksPage animated" :show="toThanks" v-bind:class="{slideInLeft : toThanks, slideOutLeft: !toThanks}">
            <div class="row">
                <div class="col-md-12">
                    <div class="imgThanksPage">
                        <img src="holder.js/100px250" class="img-rounded img-fluid" alt="Responsive image" style="">
                    </div>
                </div>
                <div class="col-md-12 thanksDiv">
                    <div class="col-md-12 text-center">
                        <h2><i class="fa fa-check-circle" aria-hidden="true"></i>感謝您已完成機車保險訂單</h2>
                    </div>
                    <div class="col-md-12">
                        <div class="thanksWords">
                            <h3>訂購完成！相關資訊將會寄送到您的E-mail信箱</h3>
                            <p>訂單編號: 0011-00016256</p>
                            <p>若有任何疑問，請撥打免費客服專線: <i aria-hidden="true" class="fa fa-phone"></i> 0800-234-088 </p>
                            <button class="pull-right btn btn-primary" @click="goBackToIndex">完成</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data: function() {
        return {

        }
    },
    methods: {
      goBackToIndex: function() {
          window.location.href = './index.html'
      }
    },
    computed: {
        toThanks: function() {
            return this.$parent.readyToGoThanksPage;
        }
    }
})

Vue.component('my-paymentcredit', {
    template: `
        <div class="container animated" :show="readyToPay" v-bind:class="{slideInLeft: readyToPay, slideOutLeft: !readyToPay}">
            <div class="row">
                <div class="col-md-12">
                    <div class="paymentCreditCardArea text-center">
                        <h3 style="padding-top: 150px;">我是信用卡付錢刷卡頁，謝謝</h3>
                    </div>
                </div>
            </div>
            <div class="row buttonPaymentPage">
                <div class="col-md-12 text-right">
                    <button class="btn btn-primary NextButton" @click="toGoThanksPage" >下一步</button>
                </div>
            </div>
        </div>
    `,
    data: function() {
        return {

        }
    },
    methods: {
        toGoThanksPage: function() {
            this.$parent.readyToGoThanksPage = true;
            this.$parent.processbarNu = 100;
        }
    },
    computed: {
        readyToPay: function() {
            if(this.$parent.readyToGoThanksPage){
                return false;
            }else{
                return this.$parent.readyToGoPay;
            }
        }
    }

})

Vue.component('my-infocheck', {
    template: `
        <div class="container customerInfo animated" v-show="readyToConfirm" v-bind:class="{slideInLeft: readyToConfirm, slideOutLeft: !readyToConfirm}">
            <div class="container-fluid">
                <div class="row title">
                    <div class="col-md-12 text-center">
                        <h3>投保資料確認</h3>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6">
                            <h4>要保人資料</h4>
                        </div>
                        <div class="col-md-6">
                            <h4>被保人資料(本人)</h4>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6">
                            <div class="col-md-6">
                                <p>姓名:</p>
                            </div>
                            <div class="col-md-6">
                                <p>劉美樂蒂</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-6">
                                <p>姓名:</p>
                            </div>
                            <div class="col-md-6">
                                <p>劉美樂蒂</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6">
                            <div class="col-md-6">
                                <p>身分證字號:</p>
                            </div>
                            <div class="col-md-6">
                                <p>A178803998</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-6">
                                <p>身分證字號:</p>
                            </div>
                            <div class="col-md-6">
                                <p>A178803998</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6">
                            <div class="col-md-6">
                                <p>性別:</p>
                            </div>
                            <div class="col-md-6">
                                <p>男</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-6">
                                <p>性別:</p>
                            </div>
                            <div class="col-md-6">
                                <p>男</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6">
                            <div class="col-md-6">
                                <p>出生日期:</p>
                            </div>
                            <div class="col-md-6">
                                <p>08/08/1990</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-6">
                                <p>出生日期:</p>
                            </div>
                            <div class="col-md-6">
                                <p>08/08/1990</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6">
                            <div class="col-md-6">
                                <p>手機號碼:</p>
                            </div>
                            <div class="col-md-6">
                                <p>0912123123</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-6">
                                <p>手機號碼:</p>
                            </div>
                            <div class="col-md-6">
                                <p>0912123123</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6">
                            <div class="col-md-6">
                                <p>地址:</p>
                            </div>
                            <div class="col-md-6">
                                <p>台北市中正區杭州南路一段666號6樓</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-6">
                                <p>地址:</p>
                            </div>
                            <div class="col-md-6">
                                <p>台北市中正區杭州南路一段666號6樓</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6">
                            <div class="col-md-6">
                                <p>E-Mail信箱:</p>
                            </div>
                            <div class="col-md-6">
                                <p>xxx@gmail.com</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-6">
                                <p>E-Mail信箱:</p>
                            </div>
                            <div class="col-md-6">
                                <p>xxx@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-12">
                            <h4>機車資料</h4>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6">
                            <div class="col-md-6"><p>車牌:</p></div>
                            <div class="col-md-6"><p>新車</p></div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-6"><p>發照日期:</p></div>
                            <div class="col-md-6"><p>099.08.12</p></div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6">
                            <div class="col-md-6"><p>車子品牌:</p></div>
                            <div class="col-md-6"><p>kymco</p></div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-6"><p>出廠日期:</p></div>
                            <div class="col-md-6"><p>2010.09</p></div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6">
                            <div class="col-md-6"><p>排氣量:</p></div>
                            <div class="col-md-6"><p>124cc ~ 249cc</p></div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-6"><p>引擊/車身號碼:</p></div>
                            <div class="col-md-6"><p>axt8791Geee9</p></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-12">
                            <h4>保單資料</h4>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-4">
                            <p>保險種類</p>
                        </div>
                        <div class="col-md-4">
                            <p>保險金額</p>
                        </div>
                        <div class="col-md-4">
                            <p>強制險生效日</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-4">
                            <p>強制第三責任保險-人身傷害</p>
                            <a href="#">保險相關條款</a>
                        </div>
                        <div class="col-md-4">
                            <p>每一人體傷20萬</p>
                            <p>每一人死殘200萬</p>
                        </div>
                        <div class="col-md-4">
                            <p>2017年11月12日</p>
                            <p>中午12點起保(1年期)</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6">
                            <strong>總保費</strong>
                        </div>
                        <div class="col-md-6 text-right">
                            <strong>771(元)</strong>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 text-right">
                        <button class="btn btn-danger NextButton" @click="toSlideOut" >上一步</button>
                        <button class="btn btn-primary NextButton" @click="toGoOnNextPay" >下一步</button>
                    </div>
                </div>
             </div>
        </div>   
    `,
    data: function () {
        return {

        }
    },
    methods: {
        toSlideOut: function() {
            this.$parent.readyToConfirmInfo = false;
        },
        toGoOnNextPay: function() {
            this.$parent.readyToGoPay = true;
            this.$parent.processbarNu = 75;
        }
    },
    computed: {
        readyToConfirm: function () {
            if(this.$parent.readyToGoPay){
                return false;
            }else{
                return this.$parent.readyToConfirmInfo;
            }
        }
    }
})

Vue.component('my-motoform', {
    template: `
        <div class="container customerForm animated" v-show="toBeShown" v-bind:class="{ slideOutLeft: !toBeShown, slideInLeft: toBeShown}">
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-6">
                        <div class="col-md-12">
                            <strong>車籍資料</strong>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-12">
                            <span style="position: relative;top: 10px;">選擇車廠:</span>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-6">
                        <div class="col-md-12">

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-6">
                            <button class="form-control">山葉/YAMAHA</button>
                        </div>
                        <div class="col-md-6">
                            <button class="form-control">光陽/KYMCO</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-6">
                        <div class="col-md-12">

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-6">
                            <button class="form-control">三陽/SYM</button>
                        </div>
                        <div class="col-md-6">
                            <button class="form-control" @click="toShowOther">其他/OTHER</button>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-12" v-show="showOther">
                    <div class="col-md-6">
                        <div class="col-md-12">

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-12">
                           <select class="form-control showOtherSele">
                                <option value="">GoGoRo</option>
                                <option value="">哈特佛</option>
                                <option value="">suzuki</option>
                           </select>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-6">
                        
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-3">
                            <input type="text" placeholder="車牌英文" class="form-control" name="motoPlateEng">
                        </div>
                        <div class="col-md-1">
                            <p style="padding-top:15px;">-</p>
                        </div>
                        <div class="col-md-4">
                            <input type="text" placeholder="車牌號碼" class="form-control" name="motoplateNum">
                        </div>
                        <div class="col-md-4">
                            <input type="button" class="form-control" value="新牌無牌照">
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-6">

                    </div>
                    <div class="col-md-6">
                        <div class="col-md-4"></div>
                        <div class="col-md-8">
                            <p @click="toShowModal" style="margin-top:15px; float:right;">您已選擇了125 - 249cc 數機車的保險方案</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-6"></div>
                    <div class="col-md-6">
                        <div class="col-md-3">
                            <span class="spanPosi control-form">發照日期</span>
                        </div>
                        <div class="col-md-3">
                            <select class="form-control" name="releasePlateYearDate" id="releasePlateYearDate">
                                <option value="">民國</option>
                                <option value="">民國85年</option>
                                <option value="">民國86年</option>
                                <option value="">民國87年</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select class="form-control" name="releasePLateMonthDate" id="releasePLateMonthDate">
                                <option value="">月</option>
                                <option value="">2月</option>
                                <option value="">4月</option>
                                <option value="">5月</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select class="form-control" name="releasePlateDayDate" id="releasePlateDayDate">
                                <option value="">日</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-6"></div>
                    <div class="col-md-6">
                        <div class="col-md-3">
                            <span class="spanPosi">出廠年月</span>
                        </div>
                        <div class="col-md-3">
                            <select class="form-control" name="releaseMotoYearDate" id="releaseMotoYearDate">
                                <option value="">西元</option>
                                <option value="">1999</option>
                                <option value="">2000</option>
                                <option value="">2001</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select class="form-control" name="releaseMotoMonthDate" id="releaseMotoMonthDate">
                                <option value="">月</option>
                                <option value="">2月</option>
                                <option value="">4月</option>
                                <option value="">5月</option>
                            </select>
                        </div>
                        <div class="col-md-3">

                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-6"></div>
                    <div class="col-md-6">
                        <div class="col-md-12">
                            <input type="text" name="engineNum" class="form-control" placeholder="引擊號碼/車身號碼(擇一)">
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-6">

                    </div>
                    <div class="col-md-6">
                        <div class="col-md-6">
                            <span class="spanPosi">強制生效日</span>
                        </div>
                        <div class="col-md-6">
                            <div class='input-group date' id='datetimepicker'>
                                <input type='text' class="form-control" />
                                <span class="input-group-addon">
                                <span class="glyphicon glyphicon-calendar"></span>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-12">
                    <div class="col-md-6"></div>
                    <div class="col-md-6">
                        <div class="col-md-12 text-right">
                            <p class="timePeriod">中午12點起保<b> 1 年期 </b></p>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-12">
                    <div class="col-md-6">

                    </div>
                    <div class="col-md-6">
                            <button class="btn btn-primary NextButton" @click="readyToCheckInfo" >下一步</button>
                            <button class="btn btn-danger  NextButton" @click="goBackToCustomer">上一步</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data: function () {
        return {
            showOther: false
        }
    },
    methods: {
        toShowOther: function() {
            this.showOther = true;
        },
        goBackToCustomer: function() {
            this.$parent.isCompleted = false;
            this.$parent.processbarNu = 25;
            return this.$parent.isCompleted;
        },
        readyToCheckInfo: function() {
            this.$parent.readyToConfirmInfo = true;
            this.$parent.processbarNu = 50;
        },
        toShowModal: function() {
            $('#myModal').modal('show');
        }
    },
    computed: {
        toBeShown: function() {
            if(this.$parent.isCompleted && this.$parent.readyToConfirmInfo || this.$parent.isCompleted && this.$parent.readyToGoPay){
                return false ;
            }else{
                return this.$parent.isCompleted;
            }

        }
    }
})

Vue.component('insured-form', {
    template: `
            <div class="container customerForm animated"  v-bind:class="{ slideOutLeft: isSlide, slideInLeft: !isSlide }">
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-6">
                        <strong>被保人資料</strong>
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-12">
                            <input type="checkbox" name="sameAsApplicant">
                            <span class="checkboxSpan">被保人資料同上</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-5"><input class="form-control" name="lastName" type="text" placeholder="姓"></div>
                        <div class="col-md-7"><input class="form-control" name="firstName" type="text" placeholder="名"></div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-12"><input class="form-control" type="text" name="id" placeholder="身分證字號"></div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-6">
                        <div class="gender">
                            <span>男</span>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-3 birthSpan"><span>要保人生日:</span></div>
                        <div class="col-md-3">
                            <select class="form-control" id="birthYear">
                                <option>年</option>
                                <option>1990</option>
                                <option>1992</option>
                                <option>1993</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select class="form-control" id="birthMonth">
                                <option value="volvo">月</option>
                                <option value="saab">1月</option>
                                <option value="opel">2月</option>
                                <option value="audi">3月</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select class="form-control" id="birthDay">
                                <option value="volvo">日</option>
                                <option value="saab">20</option>
                                <option value="opel">21</option>
                                <option value="audi">22</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-12"><input class="form-control" type="text" name="mobile" placeholder="手機號碼"></div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-2 addr">
                            <select class="form-control" id="city">
                                <option value="volvo">都市</option>
                                <option value="saab">北市</option>
                                <option value="opel">新北市</option>
                                <option value="audi">高雄</option>
                            </select>
                        </div>
                        <div class="col-md-2 addr">
                            <select class="form-control" id="city">
                                <option value="volvo">區</option>
                                <option value="saab">中正區</option>
                                <option value="opel">信義區</option>
                                <option value="audi">中山區</option>
                            </select>
                        </div>
                        <div class="col-md-2 addr">
                            <input class="form-control" type="text" name="zipcode" placeholder="區號">
                        </div>
                        <div class="col-md-6">
                            <input type="text" name="addr" class="form-control" placeholder="地址">
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-12"><input class="form-control" type="text" name="email" placeholder="E-mail"></div>
                    </div>
                </div>
                
                <div class="col-md-12">
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-12">
                            <p><input type="checkbox" name="agreementCheckBox">
                            我已閱讀 << <a href="./pdf/industryContentPrinciple.pdf" target="_blank">網路要保聲明事項</a> >> ， << <a href="./pdf/industryContentPrinciple.pdf" target="_blank">個人資料聲明事項</a> >>文件，並同意。</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-primary NextButton " @click="completeStepOne">下一步</button>
                    </div>
                </div>
                
            </div>
        </div>
    `,
    data: function() {
        return{
        }
    },
    methods: {
        completeStepOne: function(){
            this.$parent.isCompleted = true;
            this.$parent.processbarNu = 50;
        }
    },
    computed: {
        isSlide: function () {
            return this.$parent.isCompleted
        }
    }

})

Vue.component('applicant-form', {
    template: `
            <div class="container customerForm animated " v-bind:class="{ slideOutLeft: isSlide, slideInLeft: !isSlide }">
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-5">
                        <strong>要保人資料</strong>
                    </div>
                    <div class="col-md-7">
                        <div class="col-md-5"><input v-model="lastName" maxlength="2"  v-bind:class="{errorShow:lastNameInValid}" v-bind="toComputedData" @change="toCheckVal" class="form-control" name="lastName" type="text" placeholder="姓(中文)" required></div>
                        <div class="col-md-7"><input v-model="firstName" maxlength="4" v-bind:class="{errorShow:firstNameInValid}" class="form-control" @change="toCheckVal"  name="firstName" type="text" placeholder="名(中文)"required></div>
                    </div>
                </div>
                
                <div class="col-md-12 errorMessage" v-show="lastNameInValid || firstNameInValid" >
                    <div class="col-md-5">
                    </div>
                    <div class="col-md-7 ">
                      <div class="col-md-2">
                        <div class="iconErrorMessage">
                        </div>
                      </div>
                      <div class="col-md-10">
                         <div class="errorMsg">{{ lastNameErrorMsg }}！</div>
                      </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-5">
                    </div>
                    <div class="col-md-7">
                        <div class="col-md-12"><input v-model="pid" v-bind:class="{errorShow:pidInValid}"  @change="checkPid" maxlength="10" class="form-control" type="text" name="id" placeholder="身分證字號" required></div>
                    </div>
                </div>
                
                <div class="col-md-12 errorMessage" v-show="pidInValid" >
                    <div class="col-md-5">
                    </div>
                    <div class="col-md-7 ">
                      <div class="col-md-2">
                        <div class="iconErrorMessage">
                        </div>
                      </div>
                      <div class="col-md-10">
                         <div class="errorMsg">{{ pidErrorMsg }}！</div>
                      </div>
                    </div>
                </div>

                <div class="col-md-12" v-show="!pidInValid">
                    <div class="col-md-5">
                    </div>
                    <div class="col-md-7">
                        <div class="gender">
                            <span>{{ gender }}</span>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-5">
                    </div>
                    <div class="col-md-7">
                        <div class="col-md-3 birthSpan"><span>要保人生日:</span></div>
                        <div class="col-md-3">
                            <select @change="checkBirth" v-bind:class="{errorShow:BDayInValid}"  class="form-control" v-model="insuredBirthYear" id="birthYear" required>
                                <option>年</option>
                                <option>1990</option>
                                <option>1992</option>
                                <option>1993</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select @change="checkBirth" v-bind:class="{errorShow:BDayInValid}"  class="form-control" v-model="insuredBirthMonth" id="birthMonth" required>
                                <option value="volvo">月</option>
                                <option value="saab">1月</option>
                                <option value="opel">2月</option>
                                <option value="audi">3月</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select @change="checkBirth" v-bind:class="{errorShow:BDayInValid}" class="form-control" v-model="insuredBirthDay" id="birthDay" required>
                                <option value="volvo">日</option>
                                <option value="saab">20</option>
                                <option value="opel">21</option>
                                <option value="audi">22</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-12 errorMessage" v-show="BDayInValid" >
                    <div class="col-md-5">
                    </div>
                    <div class="col-md-7 ">
                      <div class="col-md-2">
                        <div class="iconErrorMessage">
                        </div>
                      </div>
                      <div class="col-md-10">
                         <div class="errorMsg">{{ BDayErrorMsg }}！</div>
                      </div>
                    </div>
                </div>
                
                <div class="col-md-12">
                    <div class="col-md-5">
                    </div>
                    <div class="col-md-7">
                        <div class="col-md-12"><input @change="checkMobile" class="form-control" maxlength="10" v-model="insuredMobile" type="text" name="mobile" placeholder="手機號碼" required></div>
                    </div>
                </div>
                
                <div class="col-md-12 errorMessage" v-show="mobileInValid" >
                    <div class="col-md-5">
                    </div>
                    <div class="col-md-7 ">
                      <div class="col-md-2">
                        <div class="iconErrorMessage">
                        </div>
                      </div>
                      <div class="col-md-10">
                         <div class="errorMsg">{{ mobileErrorMsg }}！</div>
                      </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-5">
                    </div>
                    <div class="col-md-7">
                        <div class="col-md-2 addr">
                            <select @change="checkAddr" v-model="insuredLivingCityId" class="form-control" id="city" required>
                                <option value="volvo">都市</option>
                                <option value="saab">北市</option>
                                <option value="opel">新北市</option>
                                <option value="audi">高雄</option>
                            </select>
                        </div>
                        <div class="col-md-2 addr">
                            <select @change="checkAddr"  v-model="insuredLivingDistrictId" class="form-control" id="city" required>
                                <option value="volvo">區</option>
                                <option value="saab">中正區</option>
                                <option value="opel">信義區</option>
                                <option value="audi">中山區</option>
                            </select>
                        </div>
                        <div class="col-md-2 addr">
                            <input @change="checkAddr" class="form-control" v-model="insuredLivingZipCode" type="text" name="zipcode" placeholder="區號" required>
                        </div>
                        <div class="col-md-6">
                            <input @change="checkAddr" type="text" name="addr" v-model="insuredAddr" class="form-control" placeholder="地址" required>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-12 errorMessage" v-show="addrInValid" >
                    <div class="col-md-5">
                    </div>
                    <div class="col-md-7 ">
                      <div class="col-md-2">
                        <div class="iconErrorMessage">
                        </div>
                      </div>
                      <div class="col-md-10">
                         <div class="errorMsg">{{ addrErrorMsg }}！</div>
                      </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-5">
                    </div>
                    <div class="col-md-7">
                        <div class="col-md-12"><input @change="checkEmail" class="form-control" v-model="insuredEmail" type="text" name="email" placeholder="E-mail" required></div>
                    </div>
                </div>
                
                <div class="col-md-12 errorMessage" v-show="emailInValid" >
                    <div class="col-md-5">
                    </div>
                    <div class="col-md-7 ">
                      <div class="col-md-2">
                        <div class="iconErrorMessage">
                        </div>
                      </div>
                      <div class="col-md-10">
                         <div class="errorMsg">{{ emailErrorMsg }}！</div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="spanLine"></div>
        </div>
    `,
    data: function() {
        return {
            lastNameInValid: false,
            firstNameInValid: false,
            pidInValid: false,
            BDayInValid: false,
            mobileInValid: false,
            addrInValid: false,
            emailInValid: false,
            lastNameErrorMsg: '',
            emailErrorMsg: '',
            pidErrorMsg: '',
            BDayErrorMsg: '',
            mobileErrorMsg: '',
            addrErrorMsg: '',
            lastName: '',
            firstName: '',
            pid: '',
            gender: '',
            insuredBirthYear: '',
            insuredBirthMonth: '',
            insuredBirthDay: '',
            insuredMobile: '',
            insuredLivingCityId: '',
            insuredLivingDistrictId: '',
            insuredLivingZipCode: '',
            insuredAddr: '',
            insuredEmail: '',
            insuredData: {}
        }
    },
    methods: {
        toCheckVal: function(event) {
            // name validation
            if(this.lastName || this.firstName){
                if(this.lastName.match(/[^\u3447-\uFA29]/ig)){
                    this.lastName = '';
                    this.lastNameInValid = true;
                    this.lastNameErrorMsg = '請輸入正確的中文姓';

                }else if(this.firstName.match(/[^\u3447-\uFA29]/ig)){
                    this.firstName = '';
                    this.firstNameInValid = true;
                    this.lastNameErrorMsg = '請輸入正確的中文名';
                }else{
                    this.lastNameInValid = false;
                    this.firstNameInValid = false;
                    this.lastNameErrorMsg = '';
                }
            }
        },
        checkAddr: function () {
            if(this.insuredLivingCityId && !this.insuredLivingDistrictId || !this.insuredLivingZipCode || !this.insuredAddr) {
                this.addrInValid = true;
                this.addrErrorMsg = '別忘記填寫所有地址欄位'
            }if(this.insuredLivingDistrictId && !this.insuredLivingCityId || !this.insuredLivingZipCode || !this.insuredAddr) {
                this.addrInValid = true;
                this.addrErrorMsg = '別忘記填寫所有地址欄位'
            }if(this.insuredLivingZipCode && !this.insuredLivingDistrictId || !this.insuredLivingCityId || !this.insuredAddr) {
                this.addrInValid = true;
                this.addrErrorMsg = '別忘記填寫所有地址欄位'
            }if(this.insuredAddr && !this.insuredLivingDistrictId || !this.insuredLivingCityId || !this.insuredLivingZipCode) {
                this.addrInValid = true;
                this.addrErrorMsg = '別忘記填寫所有地址欄位'
            }else {
                this.addrInValid = false;
            }
        },
        checkBirth: function () {

            //birthDay validation
            if(this.insuredBirthYear && !this.insuredBirthMonth || !this.insuredBirthDay){
                this.BDayInValid = true;
                this.BDayErrorMsg = '生日全部欄位是必填喔';
            }else if (this.insuredBirthMonth && !this.insuredBirthYear || !this.insuredBirthDay) {
                this.BDayInValid = true;
                this.BDayErrorMsg = '生日全部欄位是必填喔'
            }else if (this.insuredBirthDay && !this.insuredBirthYear || !this.insuredBirthMonth) {
                this.BDayInValid = true;
                this.BDayErrorMsg = '生日全部欄位必填喔'
            }else{
                this.BDayInValid = false;
            }
        },
        checkPid: function () {
            if(this.pid){
                // pid validation
                var regExpID=/^[a-z](1|2)\d{8}$/i;
                if(this.pid.search(regExpID) == -1){
                    this.pidInValid = true;
                    this.pidErrorMsg = '請輸入正確的身份證資料格式';
                }else {
                    // 取出第一個字元和最後一個數字。
                    let firstChar = this.pid.charAt(1).toUpperCase();
                    if(firstChar == 1){
                        this.gender = '男';
                    }else if (firstChar == 2) {
                        this.gender = '女';
                    }
                    this.pidInValid = false;
                }
            }
        },
        checkMobile: function () {
            if(this.insuredMobile){
                let re = /^[09]{2}[0-9]{8}$/;
                if (!re.test(this.mobile)){
                    this.mobileInValid = true;
                    this.mobileErrorMsg = '你的手機格式不對'
                }else {
                    this.mobileInValid = false;
                }
            }
        },
        checkEmail: function () {
            if(this.insuredEmail){
                let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(!reg.test(this.insuredEmail)){
                    this.emailInValid = true;
                    this.emailErrorMsg = 'E-mail格式不對'
                }else{
                    this.emailInValid = false;
                }
            }
        }

    },
    computed: {
        isSlide: function() {
            return this.$parent.isCompleted;
        },
        toComputedData: function() {
            var insuredPersonalData =  this.insuredData;
            insuredPersonalData['lastName'] = this.lastName;
            insuredPersonalData['fistName'] = this.firstName;
            insuredPersonalData['pid'] = this.pid;
            insuredPersonalData['gender'] = this.gender;
            insuredPersonalData['birthday'] = this.insuredBirthYear + '-' + this.insuredBirthMonth + '-' + this.insuredBirthDay;
            insuredPersonalData['mobile'] = this.insuredMobile;
            insuredPersonalData['city_id'] = this.insuredLivingCityId;
            insuredPersonalData['area_id'] = this.insuredLivingDistrictId;
            insuredPersonalData['zipcode'] = this.insuredLivingZipCode;
            insuredPersonalData['addr'] = this.insuredAddr;
            console.log(insuredPersonalData);
            return insuredPersonalData;
        },




    }


})

Vue.component('my-process', {
    template: `
        <div class="timeLine-wrap container">
            <div class="row">
                <div class="timeLineDiv">
                    <div class="eventDivs">
                        <div class="eventDiv" v-for="(step, index) in steps">
                            <div class="specialIcon">
                                <div class="circle" v-bind:class="{circleComplete: step.stepComplete}">
                                    <h3>{{ index + 1 }}</h3>
                                    <div>{{ step.text }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="time-bar">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" v-bind:style="{ width: processNum + '%' }">
                                <span class="sr-only"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data: function() {
        return {

        }
    },
    computed: {
        processNum: function () {
            return this.$parent.processbarNu;
        },
        steps: function() {
            return this.$parent.steps;
        }
    }
})
