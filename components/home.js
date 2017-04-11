// footer
Vue.component('my-footer', {
    template: `
        <footer class="text-center">
            <p>本站網路投保服務，由『凱萊保險代理人股份有限公司』提供 </p><br/>
            <p>本站產險商品，由『泰安產物保險公司』</p>
            <p>Copyright© 2017 Care Line Co., Ltd. All Right Reserved. <a href="./pdf/industryContentPrinciple.pdf" target="_blank">使用條款</a> | <a href="./pdf/industryContentPrinciple.pdf" target="_blank">隱私政策</a></p>
        </footer>
    `,
})

// products
Vue.component('my-products', {
    template:
            ` 
              <section class="productSection animated" v-bind:class="{zoomInLeft: isActive, zoomInRight: !isActive,}">
                  <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="products col-md-3 text-center" v-for="(product, key) in products">
                                <div class="productContentDiv animated" @click="productClicked(product)">
                                    <p>{{ product.title }}<p/>
                                    <p>{{ product.year }} 年期<p/>
                                    <div class="priceDiv">
                                    <p class="priceDiscount">{{ product.discountPrice }}<p/>  
                                    <p>{{ product.price }}<p/>
                                    </div>
                                    <p v-for=" text in product.content">{{ text }}<p/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 buttonProject">
                            <div class="col-md-6 text-center">
                                <button class="btn btn-lg" @click="oneYearProduct">一年方案</button>
                            </div>
                            <div class="col-md-6 text-center">
                                <button class="btn btn-lg" @click="twoYearProduct">兩年方案</button>
                            </div>
                        </div>
                    </div>
                  </div>
              </section>
            `,
    data: function () {
       return {
           selectedProduct: {},
           isActive: false,
           products: [
               { title: '機車強制責任險', year: 2, price: 1390, discountPrice: 1490, content:   ['每一人體傷20萬元', '每一人死殘200萬元'] },
               { title: '機車強制責任險', year: 2, price: 1390, discountPrice: 1490, content:   ['每一人體傷20萬元', '每一人死殘200萬元'] },
               { title: '機車強制責任險', year: 2, price: 1390, discountPrice: 1400, content: ['每一人體傷20萬元', '每一人死殘200萬元'] },
               { title: '機車強制責任險', year: 2, price: 1390, discountPrice: 1490, content:   ['每一人體傷20萬元', '每一人死殘200萬元'] }

           ]
       }
    },
    methods: {
        oneYearProduct: function(event) {
            this.isActive = false;
            this.products = [
                { title: '機車強制責任險', year: 1, price: 1390, discountPrice: '', content: ['每一人體傷20萬元', '每一人死殘200萬元'] },
                { title: '機車強制責任險', year: 1, price: 1390, discountPrice: '', content: ['每一人體傷20萬元', '每一人死殘200萬元'] },
                { title: '機車強制責任險', year: 1, price: 1390, discountPrice: '', content:   ['每一人體傷20萬元', '每一人死殘200萬元'] },
                { title: '機車強制責任險', year: 1, price: 1390, discountPrice: '', content: ['每一人體傷20萬元', '每一人死殘200萬元'] },
            ]
        },
        twoYearProduct: function(event) {
            this.isActive = true;
            this.products = [
                { title: '機車強制責任險', year: 2, price: 1390, discountPrice: 1490, content:   ['每一人體傷20萬元', '每一人死殘200萬元'] },
                { title: '機車強制責任險', year: 2, price: 1390, discountPrice: 1490, content:   ['每一人體傷20萬元', '每一人死殘200萬元'] },
                { title: '機車強制責任險', year: 2, price: 1390, discountPrice: 1490, content: ['每一人體傷20萬元', '每一人死殘200萬元'] },
                { title: '機車強制責任險', year: 2, price: 1390, discountPrice: 1490, content:   ['每一人體傷20萬元', '每一人死殘200萬元'] },
            ]
        },
        productClicked: function(product) {
            this.selectedProduct['title'] = product.title;
            this.selectedProduct['year'] = product.year;
            this.selectedProduct['price'] = product.price;
            this.selectedProduct['discountPrice'] = product.discountPrice;
            this.selectedProduct['content'] = product.content;

            localStorage.setItem('userSelectedProduct', JSON.stringify(this.selectedProduct));
            window.location.href = './formOne.html'
        }
    }

})

// carousel
Vue.component('my-carousel', {
    template: `
     <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img class="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide">
          <div class="container">
            <div class="carousel-caption">
            </div>
          </div>
        </div>
        <div class="item">
          <img class="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide">
          <div class="container">
            <div class="carousel-caption">
              
            </div>
          </div>
        </div>
        <div class="item">
          <img class="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide">
          <div class="container">
            <div class="carousel-caption">
            </div>
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
        <span class="sr-only">Next</span>
      </a>
    </div>
    `
})

// Nav-Bar
Vue.component('my-nav', {
    template: `
               <nav class="navbar navbar-default">
                <div class="container-fluid">
                  <div class="navbar-header">
                    <div class="logo"><a href="#"  @click="toGoBackIndex">logo</a></div>
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                  </div>
                  <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right">
                      <li class="active"><a href="#" @click="toGoQandAPage">Q&A <span class="sr-only">(current)</span></a></li>
                      <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i>免費客服專線 0800-234-088</a></li>
                    </ul>
                  </div><!--/.nav-collapse -->
                </div><!--/.container-fluid -->
              </nav>
              `,
    methods: {
        toGoBackIndex : function () {
            window.location.href = './index.html';
        },
        toGoQandAPage : function () {
            window.location.href = './qanda.html';
        }
    },
})

var vm = new Vue({
    el: '#app',
    data: {
        readyToGoThanksPage: false,
        readyToConfirmInfo: false,
        isCompleted: false,
        readyToGoPay: false,
        processbarNu: 25,
        userSelectedProduct: {},
        applicantData: {},
        insuredData: {},
        motoSpeedPosition: {
            left: 230
        },
        message: 'Hello Vue.js!'
    },
    computed: {
        steps : function () {
            return [{ text: '選擇專案', stepComplete: true },{ text: '填寫資料', stepComplete: this.isCompleted  },{ text: '確認付款', stepComplete: this.readyToGoPay  },{ text: '要保完成', stepComplete: this.readyToGoThanksPage  }];
        }
    }
})
