import FormGroup from "../molecules/FormGroup";
import PasswordField from "../molecules/PasswordField";

export default function RegisterForm() {
  return (
    <div className="flex flex-col gap-[20px] md:gap-[37px]">
      <FormGroup label="Username" placeholder="Masukkan username" />
      <PasswordField label="Kata Sandi" placeholder="Masukkan kata sandi" />
      <PasswordField
        label="Konfirmasi Kata Sandi"
        placeholder="Masukkan kata sandi"
      />
    </div>
  );
}
