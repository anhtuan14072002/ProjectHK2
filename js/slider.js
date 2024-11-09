var slide = [
{
	image: 'img/slider_1.jpg',
	title: 'Tân trang nhà cửa',
	description: 'Ant Garden mang đến cho không gian của bạn những chậu cây mini sáng tạo, độc đáo.',
	link: '#',
	status: 'active',
	isActive: 1
},
{
	image: 'img/slider_1.jpg',
	title: 'Không gian đón tết',
	description: 'Ant Garden mang đến cho không gian của bạn những chậu cây mini sáng tạo, độc đáo.',
	link: '#',
	status: '',
	isActive: 1
},
{
	image: 'img/slider_1.jpg',
	title: 'Đón chào ngày mới',
	description: 'Ant Garden mang đến cho không gian của bạn những chậu cây mini sáng tạo, độc đáo.',
	link: '#',
	status: '',
	isActive: 1
},
{
	image: 'img/slider_1.jpg',
	title: 'Tân trang nhà cửa',
	description: 'Ant Garden mang đến cho không gian của bạn những chậu cây mini sáng tạo, độc đáo.',
	link: '#',
	status: '',
	isActive: 0
}
];

// Đẩy tất cả các Slider vào localStorage
function saveSlide() {
    localStorage.setItem('listSlide', JSON.stringify(slide));
}

// Lấy dữ liệu Slide trong mảng từ local ra
function loadSlide() {
    slide = JSON.parse(localStorage.getItem('listSlide'));
}
if (localStorage.getItem("listSlide") != null) {
    loadSlide();
}



// Xuất các Sản Phẩm từ mảng (mảng đã đẩy vào local) ra HTML
var listLocalSlide = function () {
	var cmsSlide = "";
    for (var i in slide) {
		var data = JSON.parse(JSON.stringify(slide[i]));
			if (data.isActive == 1) {
	        	var cmsSlide = '<div class="carousel-item '+ data.status +'">';
	        	cmsSlide += '<img src="'+ data.image +'" class="d-block w-100" alt="'+ data.title +'">';
		        cmsSlide += '<div class="carousel-caption d-none d-md-block">';
		        cmsSlide += '<h5>'+ data.title +'</h5>';
		        cmsSlide += '<p>' + data.description + '</p>';
		        cmsSlide += ' </div>';
		        cmsSlide += ' </div>';
		        document.getElementById("cmsSlide").innerHTML += cmsSlide;
		    }
        }
    saveSlide();
}
listLocalSlide();


