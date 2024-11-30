import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
interface DecodedToken {
  sub: string;
}
export const useUserStore = create((set: any) => ({
  id: null,
  role: null,
  token: null,

  logout: () => {
    set({ id: null, token: null });
    localStorage.removeItem("token");
  },
  login: (token: string) => {
    const decoded: DecodedToken = jwtDecode(token);
    set({
      token,
      id: decoded.sub.split(" ")[0],
      role: decoded.sub.split(" ")[1],
    });
    console.log(
      "decoded",
      decoded.sub.split(" ")[0],
      decoded.sub.split(" ")[1]
    );
    localStorage.setItem("token", token);
    localStorage.setItem("id", decoded.sub.split(" ")[0]);
    localStorage.setItem("role", decoded.sub.split(" ")[1]);
  },
  setInstructor: () => set({ role: Role.ROLE_ADMIN }),
  setStudent: () => set({ role: Role.ROLE_USER }),
}));

export enum Role {
  ROLE_USER = "user",
  ROLE_ADMIN = "admin",
}

export enum Category {
  GRAPHIC_DESIGN = "Graphic Design",
  ART_AND_DESIGN = "Art & Design",
  MARKETING = "Marketing",
  MUSIC = "Music",
  COMPUTER_SCIENCE = "Computer Science",
  HISTORY_AND_ARCHAEOLOGY = "History & Archaeology",
  BUSINESS_ADMINISTRATION = "Business Administration",
  WEB_MANAGEMENT = "Web Management",
  INFORMATION_SOFTWARE = "Information Software",
  UI_UX_DESIGN_COURSES = "UI/UX Design Courses",
  SOFTWARE_ENGINEERING = "Software Engineering",
  HEALTH_AND_FITNESS = "Health & Fitness",
}
