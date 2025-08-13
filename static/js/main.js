document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.thumbnail-click').forEach(img => {
    img.addEventListener('click', function() {
      const modal = document.createElement('div');
      modal.style.cssText = 'display: flex; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); cursor: pointer; align-items: center; justify-content: center;';
      
      const closeBtn = document.createElement('div');
      closeBtn.innerHTML = '×';
      closeBtn.style.cssText = 'position: absolute; top: 20px; right: 30px; color: white; font-size: 40px; font-weight: bold; cursor: pointer; z-index: 1001;';
      
      const fullImg = document.createElement('img');
      fullImg.src = this.dataset.full;
      fullImg.style.cssText = 'max-width: 90%; max-height: 90%; cursor: default;';
      
      modal.appendChild(closeBtn);
      modal.appendChild(fullImg);
      document.body.appendChild(modal);
      
      // Close when clicking outside the image
      modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target === closeBtn) {
          document.body.removeChild(modal);
        }
      });
      
      // Close with Escape key
      const escapeHandler = function(e) {
        if (e.key === 'Escape') {
          document.body.removeChild(modal);
          document.removeEventListener('keydown', escapeHandler);
        }
      };
      document.addEventListener('keydown', escapeHandler);
      
      // Prevent the image itself from closing the modal
      fullImg.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    });
  });
});
