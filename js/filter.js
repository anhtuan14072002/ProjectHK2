// Xuất các Sản Phẩm từ mảng (mảng đã đẩy vào local) ra HTML hiển thị trên trang product.html
	var listLocalProductInFilter = function () {
		var listproduct = "";
	    for (var i in product) {
			var data = JSON.parse(JSON.stringify(product[i]));

		if (data.isFeature == 1) {
	        	var listproduct2 = '<div class="product-inner" data-code="' + data.code + '" data-cate="'+data.cateId+'"  data-price="'+ data.price +'" >';
		        listproduct2 += '<div class="product-image">';
		        listproduct2 += '<a href="#">';
		        listproduct2 += '<img src="' + data.image +'" alt="cay canh">';
		        listproduct2 += '</a>';
		        listproduct2 += '</div>';
		        listproduct2 += '<a class="icon-addcart add-to-cart" data-cate="'+data.cateId+'"  data-image="'+ data.image +'" data-code="' + data.code + '" data-name="'+ data.name +'" data-price="' + data.price +'">';
		        listproduct2 += '<i class="fa fa-cart-arrow-down"></i>';
		        listproduct2 += '<p class="eve-addcart">Thêm vào giỏ hàng</p>';
		        listproduct2 += '</a>';
		        listproduct2 += '<div class="product-detail">';
		        listproduct2 += '<h3>';
		        listproduct2 += '<a href="#">'+ data.name +'</a>';
		        listproduct2 += '</h3>';
		        listproduct2 += '<p>'+ data.price+ '₫</p>';
		        listproduct2 += '</div>';
		        listproduct2 += '</div>';
		        document.getElementById("listproductInFilter").innerHTML += listproduct2;
	        }
	    }
	    saveChange();
	}
	listLocalProductInFilter();

// Viết chức năng lọc


$(function(){
   $("input[type='checkbox'].filter-industry").on("change",function(e){
     var element = $(e.target);
            var category = element.data("cate");
            var price = element.data("price");


            var checkboxes = $("input[type='checkbox'].filter-industry");

            if (category !== 0) {

                checkboxes.first().prop("checked", false);
                var cate = new RegExp("^" + $("input[type='checkbox'].filter-industry:checked").map(function () { 
                	return $(this).data("cate"); 
                }).get().join("|") + "$");

                $(".product-inner").each(function () { 
                	var $this = $(this); $this[cate.source !== "0" && cate.test($this.data("cate")) ? "fadeIn" : "fadeOut"](); 
                });

            } else {
                checkboxes.slice(1).prop("checked", false);
                $(".product-inner").each(function () { 
                	var $this = $(this); $this[element.is(':checked') ? "fadeIn" : "fadeOut"](); 
                });
            }    
   });
})


