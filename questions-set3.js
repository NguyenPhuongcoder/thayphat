// Đề 3: GROUP USER (30 câu)
const questionsSet3 = [
    {
        question: "User account trong Active Directory dùng để làm gì?",
        options: [
            "Quản lý thiết bị mạng",
            "Xác thực và cấp quyền cho người dùng",
            "Quản lý dịch vụ DNS",
            "Quản lý máy in"
        ],
        correct: 1
    },
    {
        question: "Mục đích chính của Group trong AD là gì?",
        options: [
            "Lưu dữ liệu người dùng",
            "Phân quyền truy cập tài nguyên",
            "Tăng tốc đăng nhập",
            "Sao lưu dữ liệu"
        ],
        correct: 1
    },
    {
        question: "Có bao nhiêu loại Group scope trong Active Directory?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 1
    },
    {
        question: "Group nào chỉ dùng để cấp quyền truy cập tài nguyên?",
        options: [
            "Global Group",
            "Universal Group",
            "Domain Local Group",
            "Distribution Group"
        ],
        correct: 2
    },
    {
        question: "Group nào chỉ chứa user cùng domain?",
        options: [
            "Universal Group",
            "Domain Local Group",
            "Global Group",
            "Built-in Group"
        ],
        correct: 2
    },
    {
        question: "Universal Group thường dùng khi nào?",
        options: [
            "Trong 1 domain",
            "Trong nhiều domain",
            "Chỉ cho máy local",
            "Cho DNS"
        ],
        correct: 1
    },
    {
        question: "Security Group khác Distribution Group ở điểm nào?",
        options: [
            "Phạm vi domain",
            "Cấp quyền truy cập tài nguyên",
            "Tốc độ xử lý",
            "Khả năng đăng nhập"
        ],
        correct: 1
    },
    {
        question: "Distribution Group thường dùng cho mục đích gì?",
        options: [
            "Phân quyền file",
            "Gán GPO",
            "Gửi email",
            "Quản lý máy trạm"
        ],
        correct: 2
    },
    {
        question: "Mô hình AGDLP nghĩa là gì?",
        options: [
            "Account → Group → Domain → Local → Permission",
            "Account → Global → Domain Local → Permission",
            "Account → Group → Permission",
            "Account → Domain → Permission"
        ],
        correct: 1
    },
    {
        question: "Ưu điểm của việc phân quyền thông qua Group là gì?",
        options: [
            "Tăng tốc hệ thống",
            "Dễ quản lý, bảo trì",
            "Giảm dung lượng ổ cứng",
            "Giảm lỗi phần cứng"
        ],
        correct: 1
    },
    {
        question: "Một user có thể thuộc bao nhiêu group?",
        options: [
            "1",
            "5",
            "10",
            "Không giới hạn"
        ],
        correct: 3
    },
    {
        question: "Group nesting là gì?",
        options: [
            "Group chứa user",
            "Group chứa máy tính",
            "Group chứa group khác",
            "User chứa group"
        ],
        correct: 2
    },
    {
        question: "Primary Group mặc định của user là gì?",
        options: [
            "Administrators",
            "Domain Users",
            "Guests",
            "Power Users"
        ],
        correct: 1
    },
    {
        question: "Khi nào cần thay đổi Primary Group?",
        options: [
            "Khi user đăng nhập lỗi",
            "Khi dùng NFS / UNIX",
            "Khi user bị khóa",
            "Khi đổi mật khẩu"
        ],
        correct: 1
    },
    {
        question: "Built-in groups nằm ở đâu trong AD?",
        options: [
            "OU Users",
            "OU Computers",
            "OU Builtin",
            "OU Domain Controllers"
        ],
        correct: 2
    },
    {
        question: "Group nào có toàn quyền quản trị domain?",
        options: [
            "Administrators",
            "Domain Admins",
            "Enterprise Admins",
            "Schema Admins"
        ],
        correct: 1
    },
    {
        question: "Enterprise Admins có quyền gì?",
        options: [
            "Quản lý user",
            "Quản lý 1 domain",
            "Quản lý toàn forest",
            "Quản lý DNS"
        ],
        correct: 2
    },
    {
        question: "Guest account có đặc điểm gì?",
        options: [
            "Toàn quyền hệ thống",
            "Quyền hạn rất thấp",
            "Bắt buộc dùng mật khẩu",
            "Không thể đăng nhập"
        ],
        correct: 1
    },
    {
        question: "Vì sao không nên cấp permission trực tiếp cho user?",
        options: [
            "Khó backup",
            "Khó quản lý",
            "Tốn RAM",
            "Tăng thời gian đăng nhập"
        ],
        correct: 1
    },
    {
        question: "Cách phân quyền đúng chuẩn nhất là gì?",
        options: [
            "User → Permission",
            "User → OU → Permission",
            "User → Group → Permission",
            "Group → User → Permission"
        ],
        correct: 2
    },
    {
        question: "User bị khóa (lock) khi nào?",
        options: [
            "Đăng nhập sai nhiều lần",
            "Đổi mật khẩu",
            "Hết hạn tài khoản",
            "Bị xóa"
        ],
        correct: 0
    },
    {
        question: "Group scope nào không thể dùng để cấp quyền trực tiếp ngoài domain?",
        options: [
            "Universal",
            "Global",
            "Domain Local",
            "Built-in"
        ],
        correct: 1
    },
    {
        question: "Global Group thường được dùng để làm gì?",
        options: [
            "Chứa user",
            "Gán permission",
            "Gán GPO",
            "Chứa máy in"
        ],
        correct: 0
    },
    {
        question: "Universal Group được lưu thông tin ở đâu?",
        options: [
            "Domain Controller",
            "Global Catalog",
            "Local machine",
            "DNS Server"
        ],
        correct: 1
    },
    {
        question: "Nhược điểm của Universal Group là gì?",
        options: [
            "Không dùng cho multi-domain",
            "Tăng traffic replication",
            "Không gán permission",
            "Không chứa user"
        ],
        correct: 1
    },
    {
        question: "Group nào KHÔNG dùng để cấp quyền?",
        options: [
            "Security Group",
            "Distribution Group",
            "Domain Local Group",
            "Universal Group"
        ],
        correct: 1
    },
    {
        question: "Khi xóa user khỏi group thì điều gì xảy ra?",
        options: [
            "User bị xóa",
            "User mất quyền của group",
            "Group bị xóa",
            "Domain bị lỗi"
        ],
        correct: 1
    },
    {
        question: "Quyền hiệu lực của user phụ thuộc vào?",
        options: [
            "Quyền cao nhất",
            "Quyền thấp nhất",
            "Tổng tất cả quyền",
            "Quyền mặc định"
        ],
        correct: 2
    },
    {
        question: "Deny permission có đặc điểm gì?",
        options: [
            "Luôn bị bỏ qua",
            "Ưu tiên cao hơn Allow",
            "Chỉ áp dụng cho admin",
            "Không ảnh hưởng user"
        ],
        correct: 1
    },
    {
        question: "Best practice khi quản lý user là gì?",
        options: [
            "Cấp quyền trực tiếp",
            "Dùng group và mô hình AGDLP",
            "Không dùng group",
            "Chỉ dùng Domain Admin"
        ],
        correct: 1
    }
];
