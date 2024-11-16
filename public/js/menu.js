var menu = [
{
	menuId : 1,
	Name: "Trang Chủ",
	Link: "index.html",
	Target: "_self",
	Property: "",
	isActive: 1
}, {
	menuId : 2,
	Name: "Giới Thiệu",
	Link: "#",
	Target: "_self",
	Property: "",
	isActive: 1
}, {
	menuId : 3,
	Name: "Sản Phẩm",
	Link: "product.html",
	Target: "_self",
	Property: "",
	isActive: 1
}, {
	menuId : 4,
	Name: "Tin Tức",
	Link: "#",
	Target: "_self",
	Property: "",
	isActive: 1
}, {
	menuId : 5,
	Name: "Liên Hệ",
	Link: "#",
	Target: "_self",
	Property: "",
	isActive: 1
}, {
	menuId : 6,
	Name: "Quảng Cáo",
	Link: "#",
	Target: "_self",
	Property: "",
	isActive: 0
}, {
	menuId : 7,
	Name: "Khuyến Mãi",
	Link: "#",
	Target: "_self",
	Property: "",
	isActive: 0
}];


// Đẩy tất cả các Menu vào localStorage
function saveMenu() {
    localStorage.setItem('listMenu', JSON.stringify(menu));
}

// Lấy dữ liệu Menu trong mảng từ local ra
function loadMenu() {
    menu = JSON.parse(localStorage.getItem('listMenu'));
}
if (localStorage.getItem("listMenu") != null) {
    loadMenu();
}



// Xuất các Menu từ mảng (mảng đã đẩy vào local) ra HTML
var listLocalMenu = function () {
	var cmsMenu = "";
    for (var i in menu) {
		var data = JSON.parse(JSON.stringify(menu[i]));
			if (data.isActive == 1) {
	        	var cmsMenu = '<li class="nav-item">';
	        	cmsMenu += '<a '+data.Property+' class="nav-link" href="'+data.Link+'" target='+data.Target+'>'+ data.Name +'</a>';
		        cmsMenu += '</li>';
		        document.getElementById("cmsMenu").innerHTML += cmsMenu;
		    }
        }
    saveMenu();
}
listLocalMenu();


