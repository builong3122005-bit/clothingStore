document.addEventListener("DOMContentLoaded", function () {
  // --- IMAGE GALLERY LOGIC ---
  const mainImage = document.getElementById("main-image");
  const thumbnails = document.querySelectorAll(".thumbnail-image");

  // Đảm bảo các element tồn tại trước khi thêm event listener
  if (mainImage && thumbnails.length > 0) {
    thumbnails.forEach((thumb) => {
      thumb.addEventListener("click", function () {
        // Lấy URL ảnh từ thumbnail và đổi kích thước để lấy ảnh lớn
        mainImage.src = this.src.replace("w=200", "w=800");

        // Xóa class 'active' khỏi tất cả thumbnail
        thumbnails.forEach((t) => t.classList.remove("active"));

        // Thêm class 'active' cho thumbnail vừa được click
        this.classList.add("active");
      });
    });
  }

  // --- TABS LOGIC ---
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabPanes = document.querySelectorAll(".tab-pane");

  if (tabLinks.length > 0 && tabPanes.length > 0) {
    tabLinks.forEach((link) => {
      link.addEventListener("click", function () {
        const tabId = this.getAttribute("data-tab");

        // Xử lý active class cho các nút tab
        tabLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");

        // Ẩn/hiện các nội dung tab tương ứng
        tabPanes.forEach((pane) => {
          if (pane.id === tabId) {
            pane.classList.add("active");
          } else {
            pane.classList.remove("active");
          }
        });
      });
    });
  }
});
