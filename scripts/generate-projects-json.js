import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// إنشاء المجلدات إذا لم تكن موجودة
const createDirectories = () => {
  const directories = [
    path.join(__dirname, '../content/projects'),
    path.join(__dirname, '../content/products'),
    path.join(__dirname, '../content/collections'),
    path.join(__dirname, '../content/pages'),
    path.join(__dirname, '../content/settings'),
    path.join(__dirname, '../public/api'),
    path.join(__dirname, '../public/uploads')
  ];

  directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`تم إنشاء المجلد: ${dir}`);
    }
  });
};

// توليد ملف JSON للمشاريع
const generateProjectsJson = () => {
  const projectsDir = path.join(__dirname, '../content/projects');
  const outputDir = path.join(__dirname, '../public/api');
  const outputFile = path.join(outputDir, 'projects.json');
  
  if (!fs.existsSync(projectsDir)) {
    console.warn(`المجلد غير موجود: ${projectsDir}. تخطي توليد ملف JSON للمشاريع.`);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
    return;
  }

  const projectFiles = fs.readdirSync(projectsDir).filter(file => file.endsWith('.md'));
  const projects = [];

  for (const file of projectFiles) {
    const filePath = path.join(projectsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    // التأكد من وجود جميع الحقول المطلوبة والتعامل مع القيم الافتراضية
    const project = {
      slug: data.slug || path.basename(file, '.md'),
      title: data.title || '',
      description: data.description || '',
      category: data.category || '',
      area: data.area || '',
      duration: data.duration || '',
      year: data.year || '',
      client: data.client || '',
      mainImage: data.mainImage || '',
      gallery: data.gallery || [],
      details: content || '', // محتوى Markdown يذهب إلى التفاصيل
      features: data.features || [],
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    };
    projects.push(project);
  }

  // ترتيب المشاريع حسب التاريخ، الأحدث أولاً
  projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, JSON.stringify(projects, null, 2));
  console.log(`تم توليد ${projects.length} مشروع في ${outputFile}`);
};

// توليد ملف JSON للمنتجات
const generateProductsJson = () => {
  const productsDir = path.join(__dirname, '../content/products');
  const outputDir = path.join(__dirname, '../public/api');
  const outputFile = path.join(outputDir, 'products.json');
  
  if (!fs.existsSync(productsDir)) {
    console.warn(`المجلد غير موجود: ${productsDir}. تخطي توليد ملف JSON للمنتجات.`);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
    return;
  }

  const productFiles = fs.readdirSync(productsDir).filter(file => file.endsWith('.md'));
  const products = [];

  for (const file of productFiles) {
    const filePath = path.join(productsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    // التأكد من وجود جميع الحقول المطلوبة والتعامل مع القيم الافتراضية
    const product = {
      slug: data.slug || path.basename(file, '.md'),
      title: data.title || '',
      description: data.description || '',
      price: data.price || 0,
      category: data.category || '',
      mainImage: data.mainImage || '',
      gallery: data.gallery || [],
      details: content || '', // محتوى Markdown يذهب إلى التفاصيل
      specifications: data.specifications || [],
      available: data.available !== undefined ? data.available : true,
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    };
    products.push(product);
  }

  // ترتيب المنتجات حسب التاريخ، الأحدث أولاً
  products.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, JSON.stringify(products, null, 2));
  console.log(`تم توليد ${products.length} منتج في ${outputFile}`);
};

// توليد ملف JSON للمجموعات
const generateCollectionsJson = () => {
  const collectionsDir = path.join(__dirname, '../content/collections');
  const outputDir = path.join(__dirname, '../public/api');
  const outputFile = path.join(outputDir, 'collections.json');
  
  if (!fs.existsSync(collectionsDir)) {
    console.warn(`المجلد غير موجود: ${collectionsDir}. تخطي توليد ملف JSON للمجموعات.`);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
    return;
  }

  const collectionFiles = fs.readdirSync(collectionsDir).filter(file => file.endsWith('.md'));
  const collections = [];

  for (const file of collectionFiles) {
    const filePath = path.join(collectionsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    // التأكد من وجود جميع الحقول المطلوبة والتعامل مع القيم الافتراضية
    const collection = {
      slug: data.slug || path.basename(file, '.md'),
      title: data.title || '',
      description: data.description || '',
      mainImage: data.mainImage || '',
      products: data.products || [],
      content: content || '',
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    };
    collections.push(collection);
  }

  // ترتيب المجموعات حسب التاريخ، الأحدث أولاً
  collections.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, JSON.stringify(collections, null, 2));
  console.log(`تم توليد ${collections.length} مجموعة في ${outputFile}`);
};

// توليد ملف JSON للصفحات
const generatePagesJson = () => {
  const pagesDir = path.join(__dirname, '../content/pages');
  const outputDir = path.join(__dirname, '../public/api');
  const outputFile = path.join(outputDir, 'pages.json');
  
  if (!fs.existsSync(pagesDir)) {
    console.warn(`المجلد غير موجود: ${pagesDir}. تخطي توليد ملف JSON للصفحات.`);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(outputFile, JSON.stringify({}, null, 2));
    return;
  }

  const pageFiles = fs.readdirSync(pagesDir).filter(file => file.endsWith('.md'));
  const pages = {};

  for (const file of pageFiles) {
    const filePath = path.join(pagesDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    const pageName = path.basename(file, '.md');

    // إضافة الصفحة إلى الكائن
    pages[pageName] = {
      ...data,
      content: content || ''
    };
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, JSON.stringify(pages, null, 2));
  console.log(`تم توليد ${Object.keys(pages).length} صفحة في ${outputFile}`);
};

// توليد ملف JSON للإعدادات
const generateSettingsJson = () => {
  const settingsDir = path.join(__dirname, '../content/settings');
  const outputDir = path.join(__dirname, '../public/api');
  const outputFile = path.join(outputDir, 'settings.json');
  
  if (!fs.existsSync(settingsDir)) {
    console.warn(`المجلد غير موجود: ${settingsDir}. تخطي توليد ملف JSON للإعدادات.`);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(outputFile, JSON.stringify({}, null, 2));
    return;
  }

  const settingFiles = fs.readdirSync(settingsDir).filter(file => file.endsWith('.md'));
  const settings = {};

  for (const file of settingFiles) {
    const filePath = path.join(settingsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    const settingName = path.basename(file, '.md');

    // إضافة الإعداد إلى الكائن
    settings[settingName] = {
      ...data,
      content: content || ''
    };
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, JSON.stringify(settings, null, 2));
  console.log(`تم توليد ${Object.keys(settings).length} إعداد في ${outputFile}`);
};

// تنفيذ جميع الوظائف
const generateAllJson = () => {
  console.log('بدء توليد ملفات JSON...');
  createDirectories();
  generateProjectsJson();
  generateProductsJson();
  generateCollectionsJson();
  generatePagesJson();
  generateSettingsJson();
  console.log('اكتمل توليد ملفات JSON بنجاح!');
};

generateAllJson();

