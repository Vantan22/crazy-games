export const checkWidthElement = (element, callback) => {
  const elementToCheck = document.querySelector(element);

  if (elementToCheck) {
    // Tạo một instance của ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      // entries là một mảng chứa thông tin về thay đổi trong kích thước của các phần tử quan sát
      entries.forEach((entry) => {
        // entry.target là phần tử được quan sát
        const elementWidth = entry.target.clientWidth;

        // Gọi hàm callback và truyền độ rộng về
        if (typeof callback === "function") {
          callback(elementWidth);
        }
      });
    });

    // Bắt đầu quan sát phần tử
    resizeObserver.observe(elementToCheck);

    // Trả về hàm để có thể dừng quan sát khi cần thiết
    return () => {
      resizeObserver.disconnect();
    };
  } else {
    console.error("Không tìm thấy phần tử cần kiểm tra");
  }
};
