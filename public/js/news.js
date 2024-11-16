var posts = [
{
	Id: 1,
	title: 'Đặt chậu cây cảnh phong thủy ở đâu trong nhà thì tiền bạc, tài lộc sẽ "vào như nước?',
	image: 'img/news1.jpg',
	description: 'Nhiều người thường chỉ lựa chọn trồng cây cảnh để hóa giải phong thủy mà không hề biết rằng không ít loại hoa cũng mang lại phong thủy tốt cho căn nhà.',
	slug: '',
	content: 'Nhiều người thường chỉ lựa chọn trồng cây cảnh để hóa giải phong thủy mà không hề biết rằng không ít loại hoa cũng mang lại phong thủy tốt cho căn nhà.Hoa sen Không phải ngẫu nhiên mà hoa sen được lựa chọn làm một trong những quốc hoa của Việt Nam và là biểu tượng cho văn hóa của nhiều quốc gia. Hoa sen đại diện cho sự tinh khiết, nét độc đáo riêng và sức mạnh đạo lý, không những thế còn là biểu tượng của Đức Phật, đem lại phong thủy tốt.',
	tag: 'tag1, tag2',
	createdby: 'admin',
	isPublished: 1
},
{
	Id: 2,
	title: '7 loại cây cuối năm nhất định phải mua để giải trừ vận đen, kéo tài lộc vào nhà',
	image: 'img/news2.jpg',
	description: 'Nhiều người thường chỉ lựa chọn trồng cây cảnh để hóa giải phong thủy mà không hề biết rằng không ít loại hoa cũng mang lại phong thủy tốt cho căn nhà.',
	slug: '',
	content: 'Nhiều người thường chỉ lựa chọn trồng cây cảnh để hóa giải phong thủy mà không hề biết rằng không ít loại hoa cũng mang lại phong thủy tốt cho căn nhà.Hoa sen Không phải ngẫu nhiên mà hoa sen được lựa chọn làm một trong những quốc hoa của Việt Nam và là biểu tượng cho văn hóa của nhiều quốc gia. Hoa sen đại diện cho sự tinh khiết, nét độc đáo riêng và sức mạnh đạo lý, không những thế còn là biểu tượng của Đức Phật, đem lại phong thủy tốt.',
	tag: 'tag1, tag2',
	createdby: 'admin',
	isPublished: 1
},
{
	Id: 3,
	title: '6 thói xấu khiến bạn nghèo quanh năm, bỏ ngay đi để Thần Tài gõ cửa',
	image: 'img/news4.jpg',
	description: 'Nhiều người thường chỉ lựa chọn trồng cây cảnh để hóa giải phong thủy mà không hề biết rằng không ít loại hoa cũng mang lại phong thủy tốt cho căn nhà.',
	slug: '',
	content: 'Nhiều người thường chỉ lựa chọn trồng cây cảnh để hóa giải phong thủy mà không hề biết rằng không ít loại hoa cũng mang lại phong thủy tốt cho căn nhà.Hoa sen Không phải ngẫu nhiên mà hoa sen được lựa chọn làm một trong những quốc hoa của Việt Nam và là biểu tượng cho văn hóa của nhiều quốc gia. Hoa sen đại diện cho sự tinh khiết, nét độc đáo riêng và sức mạnh đạo lý, không những thế còn là biểu tượng của Đức Phật, đem lại phong thủy tốt.',
	tag: 'tag1, tag2',
	createdby: 'admin',
	isPublished: 1
},
{
	Id: 4,
	title: 'Đặt cây lưỡi hổ trong phòng ngủ, sáng đi làm gặp may chiều về nhà chồng "cưng như trứng"',
	image: 'img/news1.jpg',
	description: 'Nhiều người thường chỉ lựa chọn trồng cây cảnh để hóa giải phong thủy mà không hề biết rằng không ít loại hoa cũng mang lại phong thủy tốt cho căn nhà.',
	slug: '',
	content: 'Nhiều người thường chỉ lựa chọn trồng cây cảnh để hóa giải phong thủy mà không hề biết rằng không ít loại hoa cũng mang lại phong thủy tốt cho căn nhà.Hoa sen Không phải ngẫu nhiên mà hoa sen được lựa chọn làm một trong những quốc hoa của Việt Nam và là biểu tượng cho văn hóa của nhiều quốc gia. Hoa sen đại diện cho sự tinh khiết, nét độc đáo riêng và sức mạnh đạo lý, không những thế còn là biểu tượng của Đức Phật, đem lại phong thủy tốt.',
	tag: 'tag1, tag2',
	createdby: 'admin',
	isPublished: 0
}
];

// Đẩy tất cả các bài viết vào localStorage
function savePosts() {
    localStorage.setItem('listPosts', JSON.stringify(posts));
}

// Lấy dữ liệu bài viết trong mảng từ local ra
function loadPosts() {
    posts = JSON.parse(localStorage.getItem('listPosts'));
}
if (localStorage.getItem("listPosts") != null) {
    loadPosts();
}

// Xuất các bài viết từ mảng (mảng đã đẩy vào local) ra  HTML trang chủ
var listLocalPosts = function () {
	var listPosts = "";
    for (var i in posts) {
		var data = JSON.parse(JSON.stringify(posts[i]));
			if (data.isPublished == 1) {
	        	var listPosts = '<div class="col-md-4 col-sm-12 col-12">';
	        	listPosts += '<div class="inner-news">';
	        	listPosts += '<div class="post-ima">';
	        	listPosts += '<img src="'+ data.image +'" alt="' + data.title + '">';
	        	listPosts += '</div>';
	        	listPosts += '<div class="post-meta">';
	        	listPosts += '<h3 class="post-title">';
	        	listPosts += '<a href="#">' + data.title + '</a>';
	        	listPosts += '</h3>';
	        	listPosts += '<p class="post-author"># Author: <a href="#">' + data.createdby + '</a></p>';
	        	listPosts += '<p class="post-desc">' + data.description + '</p>' ;
	        	listPosts += '</div>';
	        	listPosts += '</div>';
	        	listPosts += '</div>';
		        document.getElementById("listPosts").innerHTML += listPosts;
		    }
        }
    savePosts();
}
listLocalPosts();
