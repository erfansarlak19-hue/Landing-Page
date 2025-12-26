import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import Header from "../../components/header/Header";
import SocialProof from "../../components/socialProof.tsx/SocialProof";
import SocialProof2 from "../../components/socialProof2/SocialProof2";

export default function LandingPage() {
  return (
		<div className="bg-gray-50">
			<Header />
			<Form />
			<SocialProof/>
			<SocialProof2 />
			<Footer />
		</div>
	);
}

