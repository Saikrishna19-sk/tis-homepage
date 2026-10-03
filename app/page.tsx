import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Academics from "@/components/academics/Academics";
import Facilities from "@/components/facilities/Facilities";
import Admissions from "@/components/admissions/Admissions";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/footer/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
    return (
        <main>
            <CustomCursor />
            <ScrollProgress />
            <Navbar />

            <Hero />
            <About />
            <Academics />
            <Facilities />
            <Admissions />
            <Testimonials />
            <Footer />
        </main>
    );
}