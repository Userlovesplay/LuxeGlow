"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Check,
  ShoppingBag,
  Droplets,
  Sun,
  Moon,
  Cloud,
  Leaf,
  Target,
  Clock,
  X,
  Zap,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

interface QuizAnswers {
  age: string;
  skinType: string;
  concerns: string[];
  climate: string;
  currentRoutine: string;
  goals: string[];
}

interface ProductResult {
  productName: string;
  tagline: string;
  description: string;
  keyIngredients: string[];
  benefits: string[];
  price: string;
  usage: string;
  skinMatch: string;
}

const quizSteps = [
  {
    id: "age",
    question: "Qual é a sua faixa etária?",
    subtitle: "Sua pele tem necessidades únicas em cada fase da vida",
    icon: Clock,
    type: "single",
    options: [
      { value: "18-25", label: "18-25 anos", description: "Pele jovem e vibrante" },
      { value: "26-35", label: "26-35 anos", description: "Prevenção e cuidado" },
      { value: "36-45", label: "36-45 anos", description: "Renovação e firmeza" },
      { value: "46-55", label: "46-55 anos", description: "Revitalização intensa" },
      { value: "55+", label: "55+ anos", description: "Nutrição profunda" },
    ],
  },
  {
    id: "skinType",
    question: "Como você descreveria sua pele?",
    subtitle: "Entender seu tipo de pele é essencial para a formulação perfeita",
    icon: Droplets,
    type: "single",
    options: [
      { value: "seca", label: "Seca", description: "Sensação de repuxamento" },
      { value: "oleosa", label: "Oleosa", description: "Brilho excessivo" },
      { value: "mista", label: "Mista", description: "Oleosa na zona T" },
      { value: "normal", label: "Normal", description: "Equilibrada" },
      { value: "sensivel", label: "Sensível", description: "Reativa e delicada" },
    ],
  },
  {
    id: "concerns",
    question: "Quais são suas principais preocupações?",
    subtitle: "Selecione até 3 preocupações que mais te incomodam",
    icon: Target,
    type: "multiple",
    maxSelect: 3,
    options: [
      { value: "rugas", label: "Rugas e linhas finas", description: "Sinais de expressão" },
      { value: "manchas", label: "Manchas e tom irregular", description: "Hiperpigmentação" },
      { value: "acne", label: "Acne e poros dilatados", description: "Imperfeições" },
      { value: "flacidez", label: "Flacidez e perda de contorno", description: "Firmeza" },
      { value: "olheiras", label: "Olheiras e bolsas", description: "Área dos olhos" },
      { value: "ressecamento", label: "Ressecamento extremo", description: "Desidratação" },
    ],
  },
  {
    id: "climate",
    question: "Como é o clima onde você vive?",
    subtitle: "O ambiente afeta diretamente as necessidades da sua pele",
    icon: Sun,
    type: "single",
    options: [
      { value: "tropical", label: "Tropical úmido", description: "Quente e úmido o ano todo" },
      { value: "subtropical", label: "Subtropical", description: "Verões quentes, invernos amenos" },
      { value: "temperado", label: "Temperado", description: "Estações bem definidas" },
      { value: "arido", label: "Árido/Seco", description: "Pouca umidade" },
      { value: "frio", label: "Frio", description: "Temperaturas baixas" },
    ],
  },
  {
    id: "currentRoutine",
    question: "Como é sua rotina atual de skincare?",
    subtitle: "Queremos complementar o que você já faz",
    icon: Moon,
    type: "single",
    options: [
      { value: "minima", label: "Mínima", description: "Só limpeza básica" },
      { value: "basica", label: "Básica", description: "Limpeza + hidratante" },
      { value: "intermediaria", label: "Intermediária", description: "Incluo sérum e protetor" },
      { value: "completa", label: "Completa", description: "Rotina de vários passos" },
      { value: "profissional", label: "Profissional", description: "Tratamentos avançados" },
    ],
  },
  {
    id: "goals",
    question: "Quais são seus objetivos principais?",
    subtitle: "Selecione até 3 resultados que você mais deseja",
    icon: Leaf,
    type: "multiple",
    maxSelect: 3,
    options: [
      { value: "luminosidade", label: "Pele luminosa e radiante", description: "Glow natural" },
      { value: "juventude", label: "Aparência mais jovem", description: "Anti-aging" },
      { value: "uniformidade", label: "Tom uniforme", description: "Sem manchas" },
      { value: "hidratacao", label: "Hidratação profunda", description: "Pele macia" },
      { value: "firmeza", label: "Mais firmeza", description: "Contorno definido" },
      { value: "textura", label: "Textura refinada", description: "Pele lisa" },
    ],
  },
];

export function LuxeQuiz({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    age: "",
    skinType: "",
    concerns: [],
    climate: "",
    currentRoutine: "",
    goals: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ProductResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Desabilitar scroll da página quando modal está aberto
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const currentQuestion = quizSteps[currentStep];
  const progress = ((currentStep + 1) / quizSteps.length) * 100;

  const handleSelect = (value: string) => {
    const questionId = currentQuestion.id as keyof QuizAnswers;

    if (currentQuestion.type === "multiple") {
      const currentValues = answers[questionId] as string[];
      const maxSelect = currentQuestion.maxSelect || 3;

      if (currentValues.includes(value)) {
        setAnswers({
          ...answers,
          [questionId]: currentValues.filter((v) => v !== value),
        });
      } else if (currentValues.length < maxSelect) {
        setAnswers({
          ...answers,
          [questionId]: [...currentValues, value],
        });
      }
    } else {
      setAnswers({ ...answers, [questionId]: value });
    }
  };

  const isSelected = (value: string) => {
    const questionId = currentQuestion.id as keyof QuizAnswers;
    const answer = answers[questionId];

    if (Array.isArray(answer)) {
      return answer.includes(value);
    }
    return answer === value;
  };

  const canProceed = () => {
    const questionId = currentQuestion.id as keyof QuizAnswers;
    const answer = answers[questionId];

    if (Array.isArray(answer)) {
      return answer.length > 0;
    }
    return answer !== "";
  };

  const handleNext = async () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit quiz
      setIsLoading(true);
      setError(null);

      try {
        console.log("📤 Enviando quiz para API...");

        const response = await fetch("/api/quiz", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers }),
        });

        console.log("📨 Status da resposta:", response.status);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const errorMessage = errorData.error || `Erro ${response.status}`;
          console.error("❌ Erro da API:", errorMessage);

          toast.error(errorMessage);
          setError(errorMessage);
          return;
        }

        const data = await response.json();
        console.log("✅ Quiz processado com sucesso!", data);

        setResult(data);
        toast.success("Análise concluída com sucesso!");
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Erro desconhecido";
        console.error("❌ Erro ao processar quiz:", err);

        const message = `Não foi possível completar sua análise. ${errorMsg}`;
        setError(message);
        toast.error(message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-lg p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onWheel={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background rounded-3xl shadow-2xl border border-primary/10 scrollbar-hide [scrollbar-gutter:stable]"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "var(--primary) transparent",
          willChange: "transform",
          transform: "translate3d(0, 0, 0)",
          WebkitOverflowScrolling: "touch"
        }}
      >
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl pointer-events-none" />

        {/* Close button */}
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-6 right-6 z-10 p-3 rounded-full bg-secondary/60 hover:bg-secondary transition-colors backdrop-blur-sm"
        >
          <X className="w-5 h-5 text-foreground/70" />
        </motion.button>

        {/* Loading State */}
        {isLoading && (
          <div className="p-12 flex flex-col items-center justify-center min-h-[500px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="relative w-24 h-24 mb-8"
            >
              <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20"
              />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-2xl md:text-3xl text-foreground mb-4 text-center"
            >
              Analisando sua pele com IA...
            </motion.h3>
            <motion.div
              className="w-64 h-2 rounded-full bg-secondary overflow-hidden mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-primary animate-shimmer"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </motion.div>
            <p className="text-muted-foreground text-center max-w-xs">
              Nossa IA está analisando seus dados e criando sua fórmula exclusiva e personalizada
            </p>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[500px]">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 rounded-full bg-red-100/20 flex items-center justify-center mb-6 border border-red-200/50"
            >
              <AlertCircle className="w-8 h-8 text-red-500" />
            </motion.div>
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 text-center">
              Erro ao Analisar
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6 text-center max-w-md">
              {error}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
              <motion.button
                onClick={() => {
                  setError(null);
                  setCurrentStep(0);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform shadow-lg shadow-primary/30 flex-1"
              >
                Tentar Novamente
              </motion.button>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-primary/20 text-primary rounded-full font-medium hover:bg-primary/5 transition-colors flex-1"
              >
                Cancelar
              </motion.button>
            </div>
          </div>
        )}

        {/* Result State */}
        {result && !isLoading && (
          <div className="p-8 md:p-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/20 text-emerald-700 dark:text-emerald-300 rounded-full text-sm mb-6 border border-emerald-200/50"
              >
                <Check className="w-4 h-4" />
                {result.skinMatch} de compatibilidade
              </motion.div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-2">
                Seu Produto Personalizado
              </h2>
              <p className="text-muted-foreground text-lg">{result.tagline}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-secondary to-accent/10 p-8">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 40px rgba(212, 175, 119, 0.2)",
                        "0 0 80px rgba(212, 175, 119, 0.4)",
                        "0 0 40px rgba(212, 175, 119, 0.2)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0"
                  />
                  <motion.div
                    animate={{ y: [-15, 15, -15] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src="/images/serum-hero.png"
                      alt={result.productName}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Product Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="font-serif text-3xl text-foreground mb-2">
                    {result.productName}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{result.description}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Ingredientes-Chave
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {result.keyIngredients.map((ingredient, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + i * 0.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-sm border border-primary/20"
                      >
                        {ingredient}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    Benefícios
                  </h4>
                  <ul className="space-y-2">
                    {result.benefits.map((benefit, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.75 + i * 0.05 }}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="pt-6 border-t border-border"
                >
                  <p className="text-sm text-muted-foreground mb-4">{result.usage}</p>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Investimento exclusivo</p>
                      <p className="font-serif text-3xl text-primary">
                        {result.price}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-premium flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-medium hover:shadow-lg shadow-lg shadow-primary/30"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Adicionar
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Quiz Steps */}
        {!isLoading && !result && !error && (
          <div className="p-8 md:p-12 relative">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                <span className="font-medium">
                  Passo <span className="text-primary">{currentStep + 1}</span> de {quizSteps.length}
                </span>
                <span>{Math.round(progress)}% completo</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-6 border border-primary/20"
                  >
                    <currentQuestion.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
                    {currentQuestion.question}
                  </h2>
                  <p className="text-muted-foreground text-lg">{currentQuestion.subtitle}</p>
                  {currentQuestion.type === "multiple" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-primary mt-3 font-medium"
                    >
                      Selecione até {currentQuestion.maxSelect} opções
                    </motion.p>
                  )}
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {currentQuestion.options.map((option, index) => (
                    <motion.button
                      key={option.value}
                      onClick={() => handleSelect(option.value)}
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`relative p-5 rounded-2xl border-2 text-left transition-all backdrop-blur-sm ${
                        isSelected(option.value)
                          ? "border-primary bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg shadow-primary/20"
                          : "border-border/50 hover:border-primary/50 hover:bg-secondary/50"
                      }`}
                    >
                      {isSelected(option.value) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-3 right-3 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg"
                        >
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </motion.div>
                      )}
                      <h3 className="font-medium text-foreground mb-1">
                        {option.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
              <motion.button
                onClick={handleBack}
                disabled={currentStep === 0}
                whileHover={currentStep !== 0 ? { scale: 1.05, x: -4 } : {}}
                whileTap={currentStep !== 0 ? { scale: 0.95 } : {}}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  currentStep === 0
                    ? "opacity-0 pointer-events-none"
                    : "text-foreground hover:bg-secondary/50"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Voltar
              </motion.button>

              <motion.button
                onClick={handleNext}
                disabled={!canProceed()}
                whileHover={canProceed() ? { scale: 1.05, y: -2 } : {}}
                whileTap={canProceed() ? { scale: 0.95 } : {}}
                className={`btn-premium flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all shadow-lg ${
                  canProceed()
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-primary/50 shadow-primary/30"
                    : "bg-secondary text-muted-foreground cursor-not-allowed"
                }`}
              >
                {currentStep === quizSteps.length - 1 ? (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Descobrir Meu Produto
                  </>
                ) : (
                  <>
                    Continuar
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
