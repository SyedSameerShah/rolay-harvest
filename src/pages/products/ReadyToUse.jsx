import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import readyToUseData from '../../data/ready-to-use.json';
import VideoBackground from '../../components/VideoBackground';
import { IceCream, Zap, ChefHat, CheckCircle, Search } from 'lucide-react';

const ReadyToUse = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = readyToUseData.filter(product => {
    const searchLower = searchTerm.toLowerCase();
    const nameEn = product.nameEn.toLowerCase();
    const nameAr = product.nameAr.toLowerCase();
    return nameEn.includes(searchLower) || nameAr.includes(searchLower);
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Hero Banner */}
      <section className="relative pb-32 overflow-hidden">
        <VideoBackground
          videoSrc="/videos/ready-to-use-hero.mp4"
          posterSrc="/images/products/base-bianca.jpg"
          overlayOpacity={0.5}
        >
          <div className="container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <IceCream className="w-24 h-24 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              {t('products.readyToUse.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {t('products.readyToUse.description')}
            </p>
          </motion.div>
          </div>
        </VideoBackground>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto mb-12"
          >
            <div className="relative">
              <input
                type="text"
                placeholder={i18n.language === 'ar' ? 'ابحث عن المنتجات...' : 'Search products...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 border-2 border-gray-200 rounded-full focus:border-gold focus:outline-none transition-colors"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          {/* Product Grid */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                custom={index}
              >
                <ProductCard product={product} category="ready-to-use" />
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="flex justify-center mb-4">
                <Search className="w-16 h-16 text-gray-400" />
              </div>
              <p className="text-xl text-gray-600">
                {i18n.language === 'ar' ? 'لم يتم العثور على منتجات' : 'No products found'}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-2">
                {i18n.language === 'ar' ? 'جاهز فورًا' : 'Instant Ready'}
              </h3>
              <p className="text-gray-600">
                {i18n.language === 'ar' ? 'لا حاجة للتحضير' : 'No preparation needed'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="flex justify-center mb-4">
                <ChefHat className="w-12 h-12 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-2">
                {i18n.language === 'ar' ? 'احترافي' : 'Professional'}
              </h3>
              <p className="text-gray-600">
                {i18n.language === 'ar' ? 'تركيبة احترافية' : 'Professional formulation'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-2">
                {i18n.language === 'ar' ? 'نتائج متسقة' : 'Consistent Results'}
              </h3>
              <p className="text-gray-600">
                {i18n.language === 'ar' ? 'جودة مضمونة في كل مرة' : 'Guaranteed quality every time'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadyToUse;

