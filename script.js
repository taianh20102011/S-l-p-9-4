// Khi trang và tài nguyên (hình ảnh, scripts, etc) đã load xong
window.addEventListener('load', function() {
  // Ẩn loading screen
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.display = 'none';

  // Hiện nội dung chính
  const content = document.getElementById('content');
  content.style.display = 'block';
});
