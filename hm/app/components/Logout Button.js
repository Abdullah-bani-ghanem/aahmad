import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-pink-600 hover:underline mt-2"
    >
      تسجيل الخروج
    </button>
  );
}
