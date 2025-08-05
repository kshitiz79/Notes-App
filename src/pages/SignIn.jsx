import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    Mail, Lock, Eye, EyeOff, BookOpen, Users,
    Star, TrendingUp, ArrowRight, CheckCircle
} from "lucide-react";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login process
        setTimeout(() => {
            setIsLoading(false);
            alert("Sign in successful! (This is a demo)");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="container mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Side - Sign In Form */}
                        <div className="max-w-md mx-auto lg:mx-0">
                            <div className="bg-white rounded-2xl border border-gray-200 p-8 ">
                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
                                        <BookOpen className="h-4 w-4 text-blue-600 mr-2" />
                                        <span className="text-sm font-medium text-blue-800">Welcome Back</span>
                                    </div>
                                    <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                        Sign In to StudyHub
                                    </h1>
                                    <p className="text-muted-foreground">
                                        Access your personalized study materials and resources
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                            <Input
                                                type="email"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="pl-10"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Password</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="pl-10 pr-10"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary"
                                            >
                                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <label className="flex items-center space-x-2 text-sm">
                                            <input type="checkbox" className="rounded border-gray-300" />
                                            <span>Remember me</span>
                                        </label>
                                        <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                                            Forgot password?
                                        </Link>
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="academic"
                                        className="w-full"
                                        size="lg"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                Signing In...
                                            </>
                                        ) : (
                                            <>
                                                Sign In
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </>
                                        )}
                                    </Button>

                                    <div className="text-center">
                                        <p className="text-sm text-muted-foreground">
                                            Don't have an account?{" "}
                                            <Link to="/signup" className="text-primary font-medium hover:underline">
                                                Sign up here
                                            </Link>
                                        </p>
                                    </div>
                                </form>

                                {/* Demo Credentials */}
                                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <h4 className="text-sm font-medium text-blue-800 mb-2">Demo Credentials:</h4>
                                    <p className="text-xs text-blue-600">Email: student@example.com</p>
                                    <p className="text-xs text-blue-600">Password: password123</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Benefits */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                    Join 25,000+ Students
                                </h2>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    Access premium study materials, connect with peers, and accelerate your academic success with our comprehensive platform.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: BookOpen,
                                        title: "50K+ Resources",
                                        description: "Comprehensive study materials for all engineering branches",
                                        color: "text-blue-600",
                                        bg: "bg-blue-50"
                                    },
                                    {
                                        icon: Users,
                                        title: "Active Community",
                                        description: "Connect and collaborate with fellow students",
                                        color: "text-green-600",
                                        bg: "bg-green-50"
                                    },
                                    {
                                        icon: Star,
                                        title: "Quality Content",
                                        description: "Verified and updated study materials",
                                        color: "text-yellow-600",
                                        bg: "bg-yellow-50"
                                    },
                                    {
                                        icon: TrendingUp,
                                        title: "Track Progress",
                                        description: "Monitor your learning journey and achievements",
                                        color: "text-purple-600",
                                        bg: "bg-purple-50"
                                    }
                                ].map((benefit, index) => (
                                    <div key={benefit.title} className={`${benefit.bg} rounded-xl p-6 border border-gray-200`}>
                                        <benefit.icon className={`h-8 w-8 ${benefit.color} mb-4`} />
                                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-4">Why Choose StudyHub?</h3>
                                <div className="space-y-3">
                                    {[
                                        "Access to premium study materials",
                                        "Previous year question papers",
                                        "Expert-curated content",
                                        "Mobile-friendly platform",
                                        "Regular content updates"
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-center">
                                            <CheckCircle className="h-5 w-5 mr-3 text-green-300" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
            </section>

            <Footer />
        </div>
    );
};

export default SignIn;