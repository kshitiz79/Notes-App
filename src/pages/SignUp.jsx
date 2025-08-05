import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { branches } from "@/data/resources";
import {
  User, Mail, Lock, Eye, EyeOff, BookOpen, GraduationCap,
  ArrowRight, CheckCircle, Shield, Zap, Users
} from "lucide-react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    branch: "",
    semester: "",
    university: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    setIsLoading(true);
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      alert("Registration successful! (This is a demo)");
    }, 2000);
  };

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-4">
                <GraduationCap className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm font-medium text-green-800">Join Our Community</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Create Your StudyHub Account
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of students and get access to premium study materials, notes, and resources for your engineering journey.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Left Side - Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 ">

                  {/* Progress Indicator */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                        1
                      </div>
                      <div className={`w-16 h-1 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                        2
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Step 1: Personal Information */}
                    {step === 1 && (
                      <div className="space-y-6">
                        <div className="text-center mb-6">
                          <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
                          <p className="text-muted-foreground">Let's start with your basic details</p>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                              type="text"
                              placeholder="Enter your full name"
                              value={formData.fullName}
                              onChange={(e) => handleInputChange('fullName', e.target.value)}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email Address</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Password</label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                              <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="Create password"
                                value={formData.password}
                                onChange={(e) => handleInputChange('password', e.target.value)}
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

                          <div className="space-y-2">
                            <label className="text-sm font-medium">Confirm Password</label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                              <Input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm password"
                                value={formData.confirmPassword}
                                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                className="pl-10 pr-10"
                                required
                              />
                              <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary"
                              >
                                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                          </div>
                        </div>

                        <Button
                          type="button"
                          onClick={nextStep}
                          variant="academic"
                          className="w-full"
                          size="lg"
                        >
                          Continue
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    )}

                    {/* Step 2: Academic Information */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <div className="text-center mb-6">
                          <h2 className="text-2xl font-bold mb-2">Academic Information</h2>
                          <p className="text-muted-foreground">Tell us about your studies</p>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">University/College</label>
                          <Input
                            type="text"
                            placeholder="Enter your university name"
                            value={formData.university}
                            onChange={(e) => handleInputChange('university', e.target.value)}
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Engineering Branch</label>
                            <Select value={formData.branch} onValueChange={(value) => handleInputChange('branch', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your branch" />
                              </SelectTrigger>
                              <SelectContent>
                                {Object.entries(branches).map(([code, branch]) => (
                                  <SelectItem key={code} value={code}>
                                    {code} - {branch.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium">Current Semester</label>
                            <Select value={formData.semester} onValueChange={(value) => handleInputChange('semester', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select semester" />
                              </SelectTrigger>
                              <SelectContent>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                                  <SelectItem key={sem} value={sem.toString()}>
                                    Semester {sem}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <input type="checkbox" className="rounded border-gray-300" required />
                          <span className="text-sm text-blue-800">
                            I agree to the{" "}
                            <Link to="/terms" className="underline hover:text-blue-600">Terms of Service</Link>
                            {" "}and{" "}
                            <Link to="/privacy" className="underline hover:text-blue-600">Privacy Policy</Link>
                          </span>
                        </div>

                        <div className="flex gap-4">
                          <Button
                            type="button"
                            onClick={prevStep}
                            variant="outline"
                            className="flex-1"
                            size="lg"
                          >
                            Back
                          </Button>
                          <Button
                            type="submit"
                            variant="academic"
                            className="flex-1"
                            size="lg"
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Creating Account...
                              </>
                            ) : (
                              <>
                                Create Account
                                <CheckCircle className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>

                  <div className="text-center mt-6">
                    <p className="text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link to="/signin" className="text-primary font-medium hover:underline">
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Benefits */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">What You'll Get</h3>
                  <div className="space-y-3">
                    {[
                      { icon: BookOpen, text: "Access to 50K+ study resources" },
                      { icon: Users, text: "Connect with 25K+ students" },
                      { icon: Shield, text: "Secure and private platform" },
                      { icon: Zap, text: "Instant download access" }
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <benefit.icon className="h-5 w-5 mr-3 text-blue-200" />
                        <span className="text-sm">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h4 className="font-bold text-lg mb-4">Popular Branches</h4>
                  <div className="space-y-3">
                    {Object.entries(branches).slice(0, 4).map(([code, branch]) => (
                      <div key={code} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 bg-gradient-to-br ${branch.color} rounded-lg flex items-center justify-center mr-3`}>
                            <span className="text-white text-xs font-bold">{code}</span>
                          </div>
                          <span className="text-sm font-medium">{code}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {(branch.students / 1000).toFixed(1)}K students
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl border border-green-200 p-6">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    <h4 className="font-bold text-green-800">Free to Join</h4>
                  </div>
                  <p className="text-sm text-green-700">
                    Create your account for free and start accessing premium study materials immediately. No hidden fees or charges.
                  </p>
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

export default SignUp;