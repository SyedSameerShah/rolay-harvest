import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import VideoBackground from '../components/VideoBackground';
import { Handshake, Star, Truck, Trophy, Award, MapPin, Package, GraduationCap, CheckCircle, Rocket, Clock, Phone } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <VideoBackground
          videoSrc="/videos/home-hero.mp4"
          posterSrc="/images/products/soft-tuttigusti.jpg"
          overlayOpacity={0.6}
        >
          <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
            <motion.div
              className="text-center"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="mb-8"
              >
                <img
                  src="/logo.png"
                  alt="royal Harvest"
                  className="h-32 md:h-40 mx-auto mb-8"
                />
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
              >
                {t('hero.title')}
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gold mb-4"
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-300 mb-12"
              >
                {t('hero.tagline')}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="#products"
                  className="btn-secondary text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.cta')}
                </motion.a>
                <motion.a
                  href="#contact"
                  className="btn-secondary text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.contact')}
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </VideoBackground>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
                {t('about.title')}
              </h2>
              <p className="text-xl text-gold">{t('about.subtitle')}</p>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16"
            >
              {t('about.description')}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Handshake, title: t('about.partnership'), desc: t('about.partnershipDesc') },
                { icon: Star, title: t('about.quality'), desc: t('about.qualityDesc') },
                { icon: Truck, title: t('about.distribution'), desc: t('about.distributionDesc') },
                { icon: Trophy, title: t('about.experience'), desc: t('about.experienceDesc') },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex justify-center mb-4">
                      <IconComponent className="w-12 h-12 text-gold" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
                {t('products.title')}
              </h2>
              <p className="text-xl text-gold">{t('products.subtitle')}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: t('products.slushes.title'),
                  desc: t('products.slushes.description'),
                  link: '/products/slushes',
                  image: 'slush-classic.jpg',
                  gradient: 'from-blue-400 to-purple-400'
                },
                {
                  title: t('products.concentrated.title'),
                  desc: t('products.concentrated.description'),
                  link: '/products/concentrated',
                  image: 'frappe-concentrate.jpg',
                  gradient: 'from-amber-400 to-orange-400'
                },
                {
                  title: t('products.readyToUse.title'),
                  desc: t('products.readyToUse.description'),
                  link: '/products/ready-to-use',
                  image: 'base-bianca.jpg',
                  gradient: 'from-pink-400 to-rose-400'
                },
                {
                  title: t('products.iceCream.title'),
                  desc: t('products.iceCream.description'),
                  link: '/products/ice-cream',
                  image: 'soft-tuttigusti.jpg',
                  gradient: 'from-teal-400 to-cyan-400'
                },
              ].map((product, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Link to={product.link} className="block">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                      <div className="h-48 relative overflow-hidden">
                        <img
                          src={`/images/products/${product.image}`}
                          alt={product.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-serif font-bold text-navy mb-3">
                          {product.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {product.desc}
                        </p>
                        <motion.div
                          className="text-gold font-medium inline-flex items-center"
                          whileHover={{ x: 5 }}
                        >
                          {t('products.viewAll')} →
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                {t('why.title')}
              </h2>
              <p className="text-xl text-gold">{t('why.subtitle')}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Award, title: t('why.reason1'), desc: t('why.reason1Desc') },
                { icon: MapPin, title: t('why.reason2'), desc: t('why.reason2Desc') },
                { icon: Package, title: t('why.reason3'), desc: t('why.reason3Desc') },
                { icon: GraduationCap, title: t('why.reason4'), desc: t('why.reason4Desc') },
                { icon: CheckCircle, title: t('why.reason5'), desc: t('why.reason5Desc') },
                { icon: Rocket, title: t('why.reason6'), desc: t('why.reason6Desc') },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex mb-4">
                      <IconComponent className="w-10 h-10 text-gold" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
                {t('contact.title')}
              </h2>
              <p className="text-xl text-gold">{t('contact.subtitle')}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInUp}>
                <ContactForm />
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-start gap-4 items-center">
                    <div className="flex-shrink-0">
                      <Phone className="w-8 h-8 text-gold" />
                    </div>
                    <div className="flex flex-row items-center gap-4">
                      <div className="flex flex-col  ml-4 ">
                        <h3 className="text-gray-600 font-serif">
                          {t('contact.phone')}
                        </h3>
                        <p className="text-lg font-semibold text-navy mb-2">{t('contact.phoneText')}</p>
                      </div>
                      <div className="flex flex-col ml-4">
                        <h3 className="text-gray-600 font-serif">
                          {t('contact.email')}
                        </h3>
                        <p className="text-lg font-semibold text-navy mb-2">{t('contact.emailText')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <MapPin className="w-8 h-8 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-navy mb-2">
                        {t('contact.location')}
                      </h3>
                      <p className="text-gray-600">{t('contact.locationText')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Clock className="w-8 h-8 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-navy mb-2">
                        {t('contact.businessHours')}
                      </h3>
                      <p className="text-gray-600">{t('contact.hoursText')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Handshake className="w-8 h-8 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-navy mb-2">
                        BCD Ice Cream Partnership
                      </h3>
                      <p className="text-gray-600 mb-3">
                        Exclusive distributor of BCD Ice Cream products
                      </p>
                      {/* <a
                        href="https://bcdicecream.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:text-gold-dark font-medium inline-flex items-center"
                      >
                        Visit BCD Ice Cream →
                      </a> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

