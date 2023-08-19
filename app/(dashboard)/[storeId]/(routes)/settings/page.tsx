import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { SettingsForm } from "./components/settings-form";

// Định nghĩa kiểu Props cho trang SettingsPage
interface SettingsPageProps {
  params: {
    storeId: string;
  }
};

// Khai báo component SettingsPage dưới dạng Functional Component
const SettingsPage: React.FC<SettingsPageProps> = async ({
  params
}) => {
  // Lấy userId từ auth() - Đây giả định là phương thức của thư viện Clerk để xác thực người dùng
  const { userId } = auth();

  // Kiểm tra xem người dùng đã đăng nhập hay chưa
  if (!userId) {
    redirect("/sign-in") // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
  }

  // Tìm cửa hàng (store) dựa trên storeId và userId
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId
    }
  });
  // Kiểm tra xem cửa hàng có tồn tại hay không
  if (!store) {
    redirect("/");// Nếu cửa hàng không tồn tại, chuyển hướng đến trang chính
  }

// Hiển thị nội dung trang SettingsPage
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
}

export default SettingsPage;