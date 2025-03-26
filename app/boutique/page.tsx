import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FooterSection } from "@/components/layout/sections/footer";

interface Product {
    name: string;
    description: string;
    price: number;
    features: string[];
    popular?: boolean;
}

interface Category {
    id: string;
    name: string;
    description: string;
    available: boolean;
    products: Product[];
}

const categories: Category[] = [
    {
        id: "minecraft",
        name: "Minecraft",
        description: "Serveurs Minecraft optimisés et performants",
        available: true,
        products: [
            {
                name: "FreeCraft",
                description: "Parfait pour débuter votre aventure",
                price: 0,
                popular: true,
                features: [
                    "2 Go RAM",
                    "2 vCore",
                    "4 Go SSD",
                    "1 Backup",
                    "1 Base de données",
                    "1 Port dédié",
                    "0 Domaine offert",
                    "Support Discord"
                ]
            },
            {
                name: "NanoCraft",
                description: "Pour un petit serveur entre amis",
                price: 1.50,
                features: [
                    "4 Go RAM",
                    "2 vCore",
                    "10 Go SSD",
                    "3 Backups",
                    "1 Base de données",
                    "1 Port dédié",
                    "1 Domaine .whst.fr offert",
                    "Support Discord"
                ]
            },
            {
                name: "ExtraCraft",
                description: "Pour un serveur public",
                price: 4.20,
                features: [
                    "8 Go RAM",
                    "4 vCore",
                    "15 Go SSD",
                    "5 Backups",
                    "2 Bases de données",
                    "2 Port dédié",
                    "1 Domaine .whst.fr offert",
                    "Support prioritaire"
                ]
            },
            {
                name: "DreamCraft",
                description: "Pour un serveur moddé !",
                price: 8.90,
                features: [
                    "16 Go RAM",
                    "8 vCore",
                    "32 Go SSD",
                    "8 Backups",
                    "2 Bases de données",
                    "3 Port dédié",
                    "1 Domaine .whst.fr offert",
                    "Support prioritaire"
                ]
            }
        ]
    },
    {
        id: "nodejs",
        name: "NodeJS",
        description: "Hébergement d'applications NodeJS",
        available: true,
        products: [
            {
                name: "FreeJS",
                description: "Idéal pour tester vos projets",
                price: 0,
                features: [
                    "512 Mo RAM",
                    "1 vCore",
                    "2 Go SSD",
                    "1 Backup",
                    "1 Base de données",
                    "1 Port dédié",
                    "0 Domaine .whst.fr offert",
                    "Support Discord"
                ]
            },
            {
                name: "BotJS",
                description: "Idéal pour les bots Discord",
                price: 1,
                features: [
                    "2 Go RAM",
                    "2 vCore",
                    "5 Go SSD",
                    "4 Backups",
                    "1 Bases de données",
                    "1 Port dédié",
                    "1 Domaine .whst.fr offert",
                    "Support Discord"
                ]
            },
            {
                name: "WebJS",
                description: "Parfait pour les applications professionnelles",
                price: 2.50,
                features: [
                    "4 Go RAM",
                    "4 vCore",
                    "12 Go SSD",
                    "6 Backups",
                    "2 Bases de données",
                    "2 Ports dédiés",
                    "1 Domaine .whst.fr offert",
                    "Support prioritaire"
                ]
            },
            {
                name: "ExtraJS",
                description: "Parfait pour des serveurs avec de multiples applications",
                price: 4.50,
                features: [
                    "12 Go RAM",
                    "6 vCore",
                    "16 Go SSD",
                    "10 Backups",
                    "2 Bases de données",
                    "3 Ports dédiés",
                    "1 Domaine .whst.fr offert",
                    "Support prioritaire"
                ]
            }
        ]
    },
    {
        id: "python",
        name: "Python",
        description: "Hébergement d'applications Python",
        available: true,
        products: [
            {
                name: "FreePy",
                description: "Idéal pour tester vos projets",
                price: 0,
                features: [
                    "512 Mo RAM",
                    "1 vCore",
                    "2 Go SSD",
                    "1 Backup",
                    "1 Base de données",
                    "1 Port dédié",
                    "0 Domaine .whst.fr offert",
                    "Support Discord"
                ]
            },
            {
                name: "NanoPy",
                description: "Idéal pour les bots Discord",
                price: 1,
                features: [
                    "2 Go RAM",
                    "2 vCore",
                    "5 Go SSD",
                    "4 Backups",
                    "1 Bases de données",
                    "1 Port dédié",
                    "1 Domaine .whst.fr offert",
                    "Support Discord"
                ]
            },
            {
                name: "SysPy",
                description: "Parfait pour les applications professionnelles",
                price: 2.50,
                features: [
                    "4 Go RAM",
                    "4 vCore",
                    "12 Go SSD",
                    "6 Backups",
                    "2 Bases de données",
                    "2 Ports dédiés",
                    "1 Domaine .whst.fr offert",
                    "Support prioritaire"
                ]
            },
            {
                name: "SuperPy",
                description: "Parfait pour des serveurs avec de multiples applications",
                price: 4.50,
                features: [
                    "12 Go RAM",
                    "6 vCore",
                    "16 Go SSD",
                    "10 Backups",
                    "2 Bases de données",
                    "3 Ports dédiés",
                    "1 Domaine .whst.fr offert",
                    "Support prioritaire"
                ]
            }
        ]
    },
    {
        id: "web",
        name: "Web",
        description: "Hébergement de sites web",
        available: false,
        products: [
            {
                name: "FreeWeb",
                description: "Pour votre premier site",
                price: 0,
                features: [
                    "1 Go SSD",
                    "1 Base de données",
                    "5 Go Bande passante",
                    "SSL Gratuit",
                    "Support Discord"
                ]
            },
            {
                name: "Basic",
                description: "Site web personnel",
                price: 3,
                features: [
                    "5 Go SSD",
                    "3 Bases de données",
                    "20 Go Bande passante",
                    "SSL Gratuit",
                    "Support Discord"
                ]
            },
            {
                name: "Pro",
                description: "Site web professionnel",
                price: 8,
                features: [
                    "15 Go SSD",
                    "10 Bases de données",
                    "100 Go Bande passante",
                    "SSL Gratuit",
                    "Support prioritaire"
                ]
            },
        ]
    },
    {
        id: "vps",
        name: "VPS",
        description: "Serveurs privés virtuels",
        available: false,
        products: []
    }
];

export default function BoutiquePage() {
    return (
        <div className="container pt-40">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">
                    Découvrez nos offres
                    <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    d'hébergement
                    </span>
                </h1>
                <p className="text-muted-foreground text-xl">
                    Des solutions adaptées à tous vos besoins
                </p>
            </div>

            <Tabs defaultValue="minecraft" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
                    {categories.map((category) => (
                        <TabsTrigger
                            key={category.id}
                            value={category.id}
                            disabled={!category.available}
                            className="relative"
                        >
                            {category.name}
                            {!category.available && (
                                <Badge variant="secondary" className="absolute -top-4 -right-4 text-xs">
                                    Bientôt Disponible
                                </Badge>
                            )}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {categories.map((category) => (
                    <TabsContent key={category.id} value={category.id}>
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-semibold mb-2">{category.name}</h2>
                            <p className="text-muted-foreground">{category.description}</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.products.map((product) => (
                                <Card key={product.name} className="p-6 relative">
                                    {product.popular && (
                                        <Badge className="absolute -top-2 -right-2">
                                            Populaire
                                        </Badge>
                                    )}
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                                        <p className="text-muted-foreground">{product.description}</p>
                                    </div>

                                    <div className="mb-6">
                                        <span className="text-3xl font-bold">{product.price}€</span>
                                        <span className="text-muted-foreground">/mois</span>
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        {product.features.map((feature) => (
                                            <div key={feature} className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 mr-2 text-primary"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <a href="https://discord.gg/Se3HN4pJW8" target="_blank" rel="noopener noreferrer" className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors text-center block">
                                        Commander
                                    </a>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
            <FooterSection />
        </div>
    );
}
