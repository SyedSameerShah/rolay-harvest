import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, category }) => {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const name = isArabic ? product.nameAr : product.nameEn;
  const description = isArabic ? product.descriptionAr : product.descriptionEn;

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={`/images/products/${product.image}`}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-navy mb-2 line-clamp-2">
          {name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>

        {product.flavors && product.flavors.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gold mb-2">
              {product.flavors.length}+ Flavors Available
            </p>
            <div className="flex flex-wrap gap-1">
              {product.flavors.slice(0, 6).map((flavor, index) => (
                <span
                  key={index}
                  className="text-xs bg-cream text-navy px-2 py-1 rounded"
                >
                  {flavor}
                </span>
              ))}
              {product.flavors.length > 6 && (
                <span className="text-xs bg-gold text-white px-2 py-1 rounded">
                  +{product.flavors.length - 6}
                </span>
              )}
            </div>
          </div>
        )}

        <motion.div
          className="inline-block text-gold font-medium group-hover:text-navy transition-colors"
          whileHover={{ x: 5 }}
        >
          {t('products.learnMore')} →
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

