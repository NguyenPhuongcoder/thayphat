const questions = [
    {
        question: "Định dạng ổ đĩa nào hỗ trợ kích thước ổ đĩa lên đến 18 exabyte?",
        options: [
            "ReFS",
            "NTFS",
            "FAT32",
            "exFAT"
        ],
        correct: 0
    },
    {
        question: "ReFS được thiết kế để giải quyết vấn đề gì?",
        options: [
            "Tăng tốc độ truy cập dữ liệu",
            "Cải thiện khả năng phục hồi",
            "Giảm dung lượng lưu trữ",
            "Tăng tính tương thích"
        ],
        correct: 1
    },
    {
        question: "Các phương pháp phân phối hồ sơ VPN nào được hỗ trợ?",
        options: [
            "Scripts",
            "Email",
            "USB",
            "Bluetooth"
        ],
        correct: 0
    },
    {
        question: "Để quản lý nhóm trong AD DS, công cụ nào có thể được sử dụng?",
        options: [
            "Active Directory Users and Computers",
            "PowerShell",
            "Tất cả các công cụ trên",
            "Group Policy Management Console"
        ],
        correct: 2
    },
    {
        question: "Giao thức xác thực nào cung cấp bảo mật mạnh nhất?",
        options: [
            "PAP",
            "CHAP",
            "MS-CHAP",
            "EAP"
        ],
        correct: 3
    },
    {
        question: "Vai trò của Network Policy Server (NPS) là gì?",
        options: [
            "Proxy RADIUS",
            "DNS Server",
            "DHCP Server",
            "File Server"
        ],
        correct: 0
    },
    {
        question: "Nếu hai router có cùng priority trong chọn DR, yếu tố quyết định là?",
        options: [
            "Địa chỉ MAC thấp hơn",
            "Thời gian khởi động trước",
            "Số lượng interface nhiều hơn",
            "Router ID cao hơn"
        ],
        correct: 3
    },
    {
        question: "Nhóm nào trong AD DS chỉ dùng với ứng dụng email?",
        options: [
            "Nhóm bảo mật",
            "Nhóm phân phối",
            "Nhóm toàn cục",
            "Nhóm cục bộ"
        ],
        correct: 1
    },
    {
        question: "Record nào dùng để chỉ định máy chủ xử lý email cho một miền?",
        options: [
            "A Record",
            "MX",
            "CNAME",
            "PTR"
        ],
        correct: 1
    },
    {
        question: "Hello interval mặc định của OSPF là bao nhiêu giây?",
        options: [
            "5 giây",
            "15 giây",
            "30 giây",
            "10 giây"
        ],
        correct: 3
    },
    {
        question: "Thành phần nào không phải của AD DS?",
        options: [
            "Domain Controller",
            "Global Catalog",
            "Schema",
            "Workstation"
        ],
        correct: 3
    },
    {
        question: "DHCP failover cho phép:",
        options: [
            "Tăng tốc độ cấp phát IP",
            "Hai DHCP servers cung cấp địa chỉ IP cho cùng subnet",
            "Mã hóa thông tin DHCP",
            "Giảm băng thông mạng"
        ],
        correct: 1
    },
    {
        question: "Cấu hình máy chủ VPN trong Windows Server 2016 cần tối thiểu bao nhiêu NIC?",
        options: [
            "Một",
            "Ba",
            "Hai",
            "Bốn"
        ],
        correct: 2
    },
    {
        question: "Nhóm 'Backup Operators' có thể khôi phục dữ liệu từ đâu?",
        options: [
            "Từ bất kỳ nguồn sao lưu nào",
            "Chỉ từ local backup",
            "Chỉ từ network backup",
            "Chỉ từ cloud backup"
        ],
        correct: 0
    },
    {
        question: "Để xác định IP từ tên miền, DNS sử dụng cơ chế nào?",
        options: [
            "Forward resolution",
            "Reverse resolution",
            "Dynamic resolution",
            "Static resolution"
        ],
        correct: 0
    },
    {
        question: "Khác biệt chính .adm và .admx trong Group Policy?",
        options: [
            ".adm nhanh hơn .admx",
            ".admx chỉ dùng cho Windows 10",
            ".adm gây phình to SYSVOL nếu có nhiều GPO, .admx thì không",
            ".adm bảo mật hơn .admx"
        ],
        correct: 2
    },
    {
        question: "Folder Redirection là gì?",
        options: [
            "Thư mục đặt trên server nhưng hiển thị như nằm trên ổ cục bộ",
            "Thư mục ẩn trên máy client",
            "Thư mục chỉ đọc",
            "Thư mục tạm thời"
        ],
        correct: 0
    },
    {
        question: "NTFS hỗ trợ cluster size lớn nhất là bao nhiêu?",
        options: [
            "512 KB",
            "1024 KB",
            "4096 KB",
            "2048 KB"
        ],
        correct: 3
    },
    {
        question: "Tính năng giúp RIP không quảng bá tuyến học từ cùng giao tiếp?",
        options: [
            "Route poisoning",
            "Split horizon",
            "Hold-down timer",
            "Triggered update"
        ],
        correct: 1
    },
    {
        question: "Quyền nên gán cho Creator/Owner ở thư mục gốc khi redirect?",
        options: [
            "Read only",
            "Modify",
            "Full control – Subfolders and Files Only",
            "Write only"
        ],
        correct: 2
    },
    {
        question: "Công nghệ RAID nào không được sử dụng?",
        options: [
            "RAID 2",
            "RAID 0",
            "RAID 1",
            "RAID 5"
        ],
        correct: 0
    },
    {
        question: "Giao thức hỗ trợ thuật toán IPsec mới nhất (bảo mật/toàn vẹn/xác thực)?",
        options: [
            "IKEv1",
            "L2TP",
            "IKEv2",
            "PPTP"
        ],
        correct: 2
    },
    {
        question: "Khi nào dùng Logon Scripts trong Group Policy?",
        options: [
            "Cài đặt phần mềm",
            "Cấu hình firewall",
            "Backup dữ liệu",
            "Ánh xạ ổ đĩa hoặc tác vụ khi người dùng đăng nhập"
        ],
        correct: 3
    },
    {
        question: "Tùy chọn Group Policy khác với Cài đặt Group Policy ở điểm nào?",
        options: [
            "Tốc độ áp dụng nhanh hơn",
            "Bảo mật cao hơn",
            "Dễ cấu hình hơn",
            "Cho phép quản lý cài đặt trước đây không thể bằng GPO"
        ],
        correct: 3
    },
    {
        question: "TGT (Ticket Granting Ticket) phát hành bởi đâu khi user đăng nhập?",
        options: [
            "Domain Controller",
            "Client Computer",
            "Application Server",
            "DNS Server"
        ],
        correct: 0
    },
    {
        question: "RODC được triển khai để làm gì?",
        options: [
            "Tăng tốc độ xác thực",
            "Giảm băng thông",
            "Tăng cường bảo mật cho chi nhánh/văn phòng xa",
            "Backup Domain Controller"
        ],
        correct: 2
    },
    {
        question: "Chính sách nào không thuộc bảo mật tài khoản trong AD DS?",
        options: [
            "Chính sách mật khẩu",
            "Chính sách bảo mật thông tin",
            "Chính sách khóa tài khoản",
            "Chính sách Kerberos"
        ],
        correct: 1
    },
    {
        question: "NTFS dùng danh sách nào để xác định quyền truy cập?",
        options: [
            "Access Control List (ACL)",
            "User Rights Assignment",
            "Security Policy",
            "Permission List"
        ],
        correct: 0
    },
    {
        question: "Record dùng để định vị dịch vụ trong Active Directory?",
        options: [
            "SRV",
            "A",
            "CNAME",
            "NS"
        ],
        correct: 0
    },
    {
        question: "LSDB của các router trong cùng một vùng OSPF phải...",
        options: [
            "Khác nhau hoàn toàn",
            "Giống nhau một phần",
            "Hoàn toàn giống nhau",
            "Không liên quan đến nhau"
        ],
        correct: 2
    },
    {
        question: "OU dùng để làm gì trong AD DS?",
        options: [
            "Lưu trữ file",
            "Quản lý DNS",
            "Cấu hình DHCP",
            "Tổ chức các đối tượng trong một domain"
        ],
        correct: 3
    },
    {
        question: "Phương pháp xác định phạm vi của GPO bao gồm:",
        options: [
            "Liên kết GPO với một OU",
            "Tạo GPO mới",
            "Xóa GPO cũ",
            "Backup GPO"
        ],
        correct: 0
    },
    {
        question: "Cấu hình OSPF: lệnh gán mạng vào một vùng?",
        options: [
            "area network",
            "network \"address\" \"wildcard-mask\" area \"area-id\"",
            "ospf network area",
            "set network area"
        ],
        correct: 1
    },
    {
        question: "Nhóm có quyền quản trị rộng cho hầu hết môi trường?",
        options: [
            "Domain Admins",
            "Schema Admins",
            "Server Operators",
            "Enterprise Admins"
        ],
        correct: 3
    },
    {
        question: "Một DHCP scope phải chứa thông tin nào?",
        options: [
            "Chỉ địa chỉ IP",
            "Chỉ subnet mask",
            "Chỉ default gateway",
            "Dải địa chỉ IP và subnet mask"
        ],
        correct: 3
    },
    {
        question: "Vì sao dùng Managed Service Accounts (MSA)?",
        options: [
            "Tự động quản lý mật khẩu cho tài khoản dịch vụ",
            "Tăng tốc độ dịch vụ",
            "Giảm dung lượng lưu trữ",
            "Tăng băng thông"
        ],
        correct: 0
    },
    {
        question: "Chức năng của DHCP relay agent là gì?",
        options: [
            "Lưu trữ địa chỉ IP",
            "Chuyển tiếp broadcast DHCP sang DHCP server ở subnet khác",
            "Mã hóa DHCP packets",
            "Backup DHCP database"
        ],
        correct: 1
    },
    {
        question: "FSMO viết tắt của gì trong AD DS?",
        options: [
            "Flexible Single Master Operations",
            "Fast Server Management Operations",
            "File System Master Operations",
            "Federated Security Master Operations"
        ],
        correct: 0
    },
    {
        question: "Lệnh kích hoạt RIP trên router?",
        options: [
            "enable rip",
            "router rip",
            "rip start",
            "activate rip"
        ],
        correct: 1
    },
    {
        question: "Thứ tự xử lý GPO mặc định trong Active Directory?",
        options: [
            "Local → Site → Domain → OU",
            "Site → Local → OU → Domain",
            "Domain → Site → Local → OU",
            "OU → Domain → Site → Local"
        ],
        correct: 0
    }
];
