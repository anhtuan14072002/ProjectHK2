var coupon = [{
	code: "MUANGAY",
	detail: "Nhập mã MUANGAY giảm ngay 150.000đ cho tất cả mặt hàng",
	value: 150000,
	dateBegin: "2020-06-03",
	dateEnd: "2020-06-03",
	isActive: 1
},
{
	code: "THU7MUANGAY",
	detail: "Nhập mã THU7MUANGAY giảm 50k trong thứ 7 này",
	value: 50000,
	dateBegin: "2020-06-03",
	dateEnd: "2020-06-04",
	isActive: 1
},
{
	code: "COVID-19",
	detail: "Nhập mã COVID-19 giảm 15k cho tất cả mặt hàng",
	value: 15000,
	dateBegin: "2020-06-03",
	dateEnd: "2020-06-04",
	isActive: 1
},
{
	code: "FREESHIP",
	detail: "Nhập mã FREESHIP để miễn phí vận chuyển",
	value: 15000,
	dateBegin: "2020-06-03",
	dateEnd: "2020-06-04",
	isActive: 0
}];

// Đẩy tất cả các MGG vào localStorage
function saveCoupon() {
    localStorage.setItem('listCoupon', JSON.stringify(coupon));
}

// Lấy dữ liệu MGG trong mảng từ local ra
function loadCoupon() {
    coupon = JSON.parse(localStorage.getItem('listCoupon'));
}
if (localStorage.getItem("listCoupon") != null) {
    loadCoupon();
}
saveCoupon();

// Xuất các Coupon từ mảng (mảng đã đẩy vào local) ra HTML
var listNoticeCoupon = function () {
	var listNoticeCoupon = "";
    for (var i in coupon) {
		var data = JSON.parse(JSON.stringify(coupon[i]));
			if (data.isActive == 1) {
	        	var listNoticeCoupon = '<a class="dropdown-item" href="#">'+ data.detail +'</a>';
		        document.getElementById("listNoticeCoupon").innerHTML += listNoticeCoupon;
		    }
        }
    saveMenu();
}
listNoticeCoupon();

// Đếm số mã active
var countCoupon = function () {
	var c = 0;
	for (var i in coupon) {
		if (coupon[i].isActive == 1) {
			c++;
		}
	}
	return c;
}
$('#countCoupon').html(countCoupon());
countCoupon();