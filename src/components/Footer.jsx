import {
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col w-1/5 ml-20">
        <img
          src="https://phytoterapica.vtexassets.com/assets/vtex/assets-builder/phytoterapica.tema-phytoterapica/4.0.23/imgs/logo-phytoterapica___a8ddafb15063415a28c300fa0d50c099.png"
          alt="Logo"
          className="py-5 border-b"
        />
        <div className="flex gap-5 mt-5 m-auto mb-10">
          <FaInstagram className="w-10 h-10 rounded-full border p-2" />
          <FaFacebook className="w-10 h-10 rounded-full border p-2" />
          <FaGithub className="w-10 h-10 rounded-full border p-2" />
          <FaTwitter className="w-10 h-10 rounded-full border p-2" />
          <FaYoutube className="w-10 h-10 rounded-full border p-2" />
        </div>
      </div>

      <div className="mr-32">
        <h2 className="text-2xl font-medium mb-3 text-center">
          Formas de pagamento:
        </h2>

        <div className="flex gap-3 ">
          <img
            src="https://phytoterapica.vtexassets.com/assets/vtex/assets-builder/phytoterapica.tema-phytoterapica/4.0.24/imgs/Master___d6d3e218475c698aea973d6769131556.png"
            alt="Master"
          />
          <img
            src="https://phytoterapica.vtexassets.com/assets/vtex/assets-builder/phytoterapica.tema-phytoterapica/4.0.24/imgs/Visa___5a79be7503222d4f301704d18617bf9c.png"
            alt="Visa"
          />
          <img
            src="https://phytoterapica.vtexassets.com/assets/vtex/assets-builder/phytoterapica.tema-phytoterapica/4.0.24/imgs/Diners___0bc0f6a1ecf82764a1ee09288c188aa0.png"
            alt="American Express"
          />
          <img
            src="https://phytoterapica.vtexassets.com/assets/vtex/assets-builder/phytoterapica.tema-phytoterapica/4.0.24/imgs/Elo___a2d768f67af865a10c3fb739dc742658.png"
            alt="Elo"
          />
          <img
            src="https://phytoterapica.vtexassets.com/assets/vtex/assets-builder/phytoterapica.tema-phytoterapica/4.0.24/imgs/Hiper___658b71e8411115a860ee510afe937605.png"
            alt="Hipercard"
          />
          <img
            src="https://phytoterapica.vtexassets.com/assets/vtex.file-manager-graphql/images/c92e2d19-ecd6-4787-a561-95d4c17f7171___89de1d94e84a932e246c35b5814ccf05.webp"
            alt="Pix"
          />
        </div>
      </div>
    </div>
  );
}
