// Đề 2: 40 câu hỏi tiếp theo
const questionsSet2 = [
    {
        question: "DNS chứa Resource Records, MX là 1 trong số đó. Bản ghi MX được dùng để cung ứng dịch vụ nào sau đây?",
        options: [
            "Chuyển Mail trên Internet",
            "Phân giải tên miền",
            "Quản lý DNS Server",
            "Cấu hình DHCP"
        ],
        correct: 0
    },
    {
        question: "Để huỷ bỏ địa chỉ nhận được từ DHCP Server, chúng ta sử dụng lệnh sau:",
        options: [
            "ipconfig /all",
            "ipconfig /flushdns",
            "ipconfig /release",
            "ipconfig /registerdns"
        ],
        correct: 2
    },
    {
        question: "Tên miền đủ điều kiện có cấu trúc nào sau đây?",
        options: [
            "domain.hostname",
            "toplevel.domain",
            "hostname.toplevel",
            "hostname.domain.toplevel"
        ],
        correct: 3
    },
    {
        question: "Đơn vị nhỏ nhất trong hệ thống Active Directory là?",
        options: [
            "Domain",
            "Forest",
            "Site",
            "OU (Organizational Unit)"
        ],
        correct: 3
    },
    {
        question: "Dịch vụ DNS Server có chức năng chính là gì?",
        options: [
            "Phân giải tên miền",
            "Cấp phát địa chỉ IP",
            "Quản lý người dùng",
            "Backup dữ liệu"
        ],
        correct: 0
    },
    {
        question: "Bảo mật trên ổ đĩa NTFS dựa vào:",
        options: [
            "Password Protection",
            "Access Control List (ACL)",
            "Encryption Key",
            "Firewall Rules"
        ],
        correct: 1
    },
    {
        question: "Phiên bản nào không phải là phiên bản Windows Server 2016?",
        options: [
            "Windows Server 2016 Enterprise",
            "Windows Server 2016 Standard",
            "Windows Server 2016 Datacenter",
            "Windows Server 2016 Essentials"
        ],
        correct: 0
    },
    {
        question: "Loại tài khoản cho phép người dùng đăng nhập Domain để truy cập tài nguyên?",
        options: [
            "Domain user accounts",
            "Local user accounts",
            "Guest accounts",
            "Service accounts"
        ],
        correct: 0
    },
    {
        question: "Chức năng nào không có trong OU?",
        options: [
            "Tổ chức đối tượng",
            "Gỡ bỏ và hạ cấp Domain",
            "Áp dụng Group Policy",
            "Ủy quyền quản trị"
        ],
        correct: 1
    },
    {
        question: "Địa chỉ 172.16.254.1/18 thuộc mạng nào?",
        options: [
            "172.16.0.0/18",
            "172.16.128.0/18",
            "172.16.192.0/18",
            "172.16.254.0/18"
        ],
        correct: 1
    },
    {
        question: "Quá trình gia hạn thuê IP DHCP xảy ra khi nào?",
        options: [
            "Hết 50% thời gian thuê",
            "Hết 75% thời gian thuê",
            "Hết 100% thời gian thuê",
            "Khi khởi động lại máy"
        ],
        correct: 0
    },
    {
        question: "Kĩ thuật DNS cho phép Name Server nội bộ chuyển truy vấn miền bên ngoài:",
        options: [
            "Recursion",
            "Iteration",
            "Caching",
            "Forwarders"
        ],
        correct: 3
    },
    {
        question: "Trong DHCP, gói nào không tồn tại?",
        options: [
            "DHCPDISCOVER",
            "DHCPOFFER",
            "DHCPSEND",
            "DHCPACK"
        ],
        correct: 2
    },
    {
        question: "Thông tin user/group miền lưu ở file và vị trí nào?",
        options: [
            "SAM tại \\Windows\\System32",
            "AD.DAT tại \\Windows\\AD",
            "NTDS.DIT tại \\Windows\\NTDS",
            "USER.DB tại \\Windows\\Database"
        ],
        correct: 2
    },
    {
        question: "Nhóm bảo mật và nhóm phân phối có thể chuyển đổi sang loại nhóm khác trong ADDS?",
        options: [
            "Sai",
            "Đúng",
            "Chỉ trong cùng domain",
            "Chỉ với quyền Enterprise Admin"
        ],
        correct: 0
    },
    {
        question: "Quá trình đăng nhập vào AD DS trải qua bao nhiêu bước?",
        options: [
            "6",
            "8",
            "10",
            "12"
        ],
        correct: 1
    },
    {
        question: "Trước khi cài DHCP Server, cần làm gì cho máy server?",
        options: [
            "Cài đặt DNS Server",
            "Gia nhập Domain",
            "Cài địa chỉ IP tĩnh và subnet mask",
            "Cấu hình Firewall"
        ],
        correct: 2
    },
    {
        question: "Máy chủ Domain Controller yêu cầu phân vùng HĐH có định dạng?",
        options: [
            "FAT32",
            "exFAT",
            "ReFS",
            "EXT4",
            "NTFS"
        ],
        correct: 4
    },
    {
        question: "Để cho phép tài khoản máy tính quản lý user (thêm/xoá/sửa), cấp quyền thế nào?",
        options: [
            "Đưa vào nhóm Domain Admins",
            "Đưa vào nhóm Account Operators",
            "Đưa vào nhóm Server Operators",
            "Đưa vào nhóm Backup Operators"
        ],
        correct: 1
    },
    {
        question: "Phát biểu 'RAID 5 đọc chậm và ghi nhanh' đúng hay sai?",
        options: [
            "Sai",
            "Đúng",
            "Chỉ đúng với SSD",
            "Chỉ đúng với HDD"
        ],
        correct: 0
    },
    {
        question: "Địa chỉ MAC có độ dài bao nhiêu bit?",
        options: [
            "32 bit",
            "64 bit",
            "48 bit",
            "128 bit"
        ],
        correct: 2
    },
    {
        question: "Trong DHCP, khi xung đột tùy chọn, loại cung cấp nào được ưu tiên?",
        options: [
            "Scope Options",
            "Server Options",
            "Class Options",
            "Reservations"
        ],
        correct: 3
    },
    {
        question: "Hệ điều hành Windows 8 nào không hỗ trợ gia nhập Domain?",
        options: [
            "Windows 8 Pro",
            "Windows 8 Enterprise",
            "Windows 8.1 Pro",
            "Windows 8.1"
        ],
        correct: 3
    },
    {
        question: "Để xin DHCP cấp IP mới dùng lệnh:",
        options: [
            "ipconfig /all",
            "ipconfig /release",
            "ipconfig /renew",
            "ipconfig /refresh"
        ],
        correct: 2
    },
    {
        question: "Dịch vụ yêu cầu khi quản trị Active Directory?",
        options: [
            "DHCP",
            "FTP",
            "IIS",
            "DNS"
        ],
        correct: 3
    },
    {
        question: "Server sao lưu dữ liệu của Primary Name Server và tiếp quản khi gián đoạn?",
        options: [
            "Backup Name Server",
            "Standby Name Server",
            "Secondary Name Server",
            "Replica Name Server"
        ],
        correct: 2
    },
    {
        question: "DNS record ánh xạ IP → tên máy?",
        options: [
            "PTR Record",
            "A Record",
            "CNAME Record",
            "MX Record"
        ],
        correct: 0
    },
    {
        question: "Ánh xạ DC 203.162.0.11 vào in-addr.arpa có dạng?",
        options: [
            "203.162.0.11.in-addr.arpa",
            "11.162.0.203.in-addr.arpa",
            "11.0.162.203.in-addr.arpa",
            "203.0.162.11.in-addr.arpa"
        ],
        correct: 2
    },
    {
        question: "Định dạng ReFS hỗ trợ kích thước ổ 2^78 sử dụng bao nhiêu?",
        options: [
            "4KB cluster sizes",
            "8KB cluster sizes",
            "16KB cluster sizes",
            "32KB cluster sizes"
        ],
        correct: 2
    },
    {
        question: "Trên Windows Server 2016, định dạng ổ nào không được hỗ trợ?",
        options: [
            "NTFS",
            "ReFS",
            "FAT",
            "exFAT"
        ],
        correct: 2
    },
    {
        question: "Trên máy cục bộ, tạo user mới mặc định thuộc nhóm nào?",
        options: [
            "Administrators",
            "Power Users",
            "Users",
            "Guests"
        ],
        correct: 2
    },
    {
        question: "Máy chủ lưu Active Directory còn gọi là?",
        options: [
            "File Server",
            "Web Server",
            "Database Server",
            "Domain Controller"
        ],
        correct: 3
    },
    {
        question: "Bản ghi cung cấp thông tin dữ liệu chính xác nhất trong zone?",
        options: [
            "SOA (Start of Authority)",
            "NS Record",
            "A Record",
            "MX Record"
        ],
        correct: 0
    },
    {
        question: "Chỉ được thiết lập Security Policy của Folder trên...",
        options: [
            "Phân vùng FAT32",
            "Phân vùng NTFS",
            "Phân vùng exFAT",
            "Bất kỳ phân vùng nào"
        ],
        correct: 1
    },
    {
        question: "DNS record ánh xạ tên máy → địa chỉ IP?",
        options: [
            "A Record",
            "PTR Record",
            "CNAME Record",
            "NS Record"
        ],
        correct: 0
    },
    {
        question: "Công cụ tạo account và lưu trên Windows Server 2016 DC?",
        options: [
            "Computer Management",
            "Server Manager",
            "Active Directory Users and Computers",
            "Group Policy Management"
        ],
        correct: 2
    },
    {
        question: "Định dạng ổ GPT có thể lớn hơn 2TB?",
        options: [
            "Sai",
            "Đúng",
            "Chỉ với NTFS",
            "Chỉ với ReFS"
        ],
        correct: 1
    },
    {
        question: "Lựa chọn tăng cường bảo mật DHCP khi hạn chế truy cập mạng?",
        options: [
            "Mã hóa DHCP",
            "DHCP Snooping",
            "MAC Filtering",
            "Xác thực lớp 2"
        ],
        correct: 3
    },
    {
        question: "Người dùng không thể tự đổi mật khẩu, chỉ admin mới đổi được?",
        options: [
            "Sai",
            "Đúng",
            "Tùy thuộc Group Policy",
            "Chỉ đúng với Local Account"
        ],
        correct: 0
    },
    {
        question: "Lệnh kiểm tra cấu hình DNS trên AD-DS?",
        options: [
            "ipconfig /all",
            "ping",
            "tracert",
            "nslookup"
        ],
        correct: 3
    }
];
