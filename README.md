# 🎮 WorkAdventure Maps

A WorkAdventure map starter template using the official map-starter-kit format for creating interactive virtual worlds.

## 🚀 Quick Start

### Local Development
```bash
npm install
npm start
```
Then visit: http://localhost:5173

### Production Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
workadventure-maps/
├── index.html              # Navigation page
├── package.json            # map-starter-kit@3.3.18 compatible
├── tsconfig.json           # TypeScript configuration  
├── vite.config.js          # Vite config with wa-map-optimizer
├── test-map.tmj           # Template map for creating new maps
├── src/
│   └── scripts/            # TypeScript map scripts
│       └── test-map.ts     # Template script
├── tilesets/              # Tileset images (WA official)
│   ├── WA_Room_Builder.png
│   └── [other tilesets]
└── .github/
    └── workflows/
        └── build-and-deploy.yml  # GitHub Actions deployment
```

## 🎯 Features

- ✅ Official WorkAdventure map-starter-kit@3.3.18 format
- ✅ Vite development server with hot reload  
- ✅ TypeScript support for map scripting
- ✅ All official WorkAdventure tilesets included
- ✅ GitHub Pages deployment ready
- ✅ Navigation page with play URLs
- ✅ Test map template for rapid development

## 🛠️ Creating New Maps

1. **Copy the template**:
   ```bash
   cp test-map.tmj your-map.tmj
   cp src/scripts/test-map.ts src/scripts/your-map.ts
   ```

2. **Edit your map**:
   - Open `your-map.tmj` in [Tiled Editor](https://www.mapeditor.org/)
   - Update the script property to point to `./scripts/your-map.ts`
   - Customize the TypeScript script in `src/scripts/your-map.ts`

3. **Add to navigation**:
   - Update `index.html` to include your new map

## 🌐 Deployment

### GitHub Pages (Automatic)
Push to the main branch and GitHub Actions will automatically deploy to GitHub Pages:

```bash
git add .
git commit -m "Add new map"
git push origin main
```

Your maps will be available at: `https://username.github.io/workadventure-maps/`

### Manual Upload
Configure environment variables for WorkAdventure hosting:

```bash
cp .env.example .env
# Edit .env with your configuration
npm run upload
```

## 🎮 Testing Your Maps

### Local Testing
1. Start the development server: `npm start`
2. Visit http://localhost:5173 for the navigation page
3. Click "Play Now" to test in WorkAdventure

⚠️ **Note**: WorkAdventure HTTPS cannot access HTTP localhost. For actual testing:
- Deploy to GitHub Pages or other HTTPS hosting
- Use [WorkAdventure Getting Started](https://workadventu.re/getting-started) for local development

### Production Testing
```bash
npm run build
npm run preview
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file (copy from `.env.example`):

```env
# Deployment mode
UPLOAD_MODE=GH_PAGES

# For WorkAdventure hosting (optional)
MAP_STORAGE_URL=your-storage-url
MAP_STORAGE_API_KEY=your-api-key
UPLOAD_DIRECTORY=your-upload-directory
```

### GitHub Secrets
For WorkAdventure hosting, add these secrets to your GitHub repository:
- `MAP_STORAGE_API_KEY`
- `MAP_STORAGE_URL` (optional, can use .env)

## 🎨 Tilesets

This project includes all official WorkAdventure tilesets:
- **WA_Room_Builder.png** - Basic room elements
- **WA_Exterior.png** - Outdoor elements
- **WA_Decoration.png** - Decorative items
- **WA_Furniture.png** - Indoor furniture
- And many more...

## 📚 Resources

- [WorkAdventure Documentation](https://docs.workadventu.re/)
- [Map Building Guide](https://docs.workadventu.re/map-building/)
- [Scripting API](https://docs.workadventu.re/developer/map-scripting/)
- [Tiled Editor](https://www.mapeditor.org/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-map`
3. Commit your changes: `git commit -m 'Add amazing map'`
4. Push to the branch: `git push origin feature/amazing-map`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

🎮 **Ready to create amazing WorkAdventure experiences!**