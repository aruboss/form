##ví dụ về xử lý vs form  

##Chặn submit form  

##Nhận giá trị bằng onChange và hiển thị bằng value (khi khai báo onChange luôn phải đi kèm khai báo value)  

##Nhận giá trị form bằng onSubmit

##RadioButton: chỉ đc nhấn chọn 1 tên -> set các tên thuộc radio -> giống nhau

##set mặc định check -> checked={this.state....===.....}

##checkbox: trạng thái biến là true và false, kp chuỗi kiểu "true""false" nên phải thêm dòng kiểm tra trong onHandleChange
##onHandleChange(event){

    this.setState({
    
      [event.target.name] : (event.target.type==='checkbox'?event.target.checked:event.target.value)
      
    })
    
  }
