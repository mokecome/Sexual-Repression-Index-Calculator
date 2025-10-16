/**
 * 主页组件 - 性压抑指数计算器的首页
 * 提供评估介绍、快速开始入口和功能说明
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from "lucide-react";
import {
  Brain,
  Clock,
  Shield,
  Users,
  BarChart3,
  FileText,
  Heart,
  Zap,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Target,
  History,
  Menu
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageSwitcher } from '@/components/common';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-psychology-calm via-white to-psychology-warm">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-8 h-8 bg-psychology-primary/10 rounded-full"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-psychology-accent/10 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-6 h-6 bg-psychology-secondary/10 rounded-full"></div>
        <div className="absolute bottom-32 right-20 w-10 h-10 bg-psychology-primary/5 rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* 导航栏 */}
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-psychology-primary rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-psychology-primary">{t('common.appSubtitle')}</h1>
                <p className="text-xs text-muted-foreground">{t('common.appName')}</p>
              </div>
            </Link>

            {/* 移动端菜单 */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col gap-4 mt-4">
                    <Button variant="ghost" size="sm" asChild className="justify-start">
                      <Link to="/guide" className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        {t('nav.guide')}
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="justify-start">
                      <Link to="/science" className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        {t('nav.science')}
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="justify-start">
                      <Link to="/history" className="flex items-center gap-2">
                        <History className="w-4 h-4" />
                        {t('nav.history')}
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="justify-start">
                      <a
                        href="https://github.com/banlanzs/Sexual-Repression-Calculator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        {t('nav.github')}
                      </a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* 桌面端菜单 */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/guide" className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm">{t('nav.guide')}</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/science" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">{t('nav.science')}</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/history" className="flex items-center gap-2">
                  <History className="w-4 h-4" />
                  <span className="text-sm">{t('nav.history')}</span>
                </Link>
              </Button>
              <LanguageSwitcher />
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/banlanzs/Sexual-Repression-Calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </nav>

        {/* 主要内容区域 */}
        <main className="container mx-auto px-4 pb-20">
          {/* 英雄区域 */}
          <section className="text-center mb-20">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-6 bg-psychology-primary/10 text-psychology-primary border-psychology-primary/20">
                <Heart className="w-4 h-4 mr-2" />
                {t('home.badge')}
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-psychology-primary via-psychology-secondary to-psychology-accent bg-clip-text text-transparent">
                {t('home.title')}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                {t('home.description')}
              </p>

              {/* 适应性评估亮点 */}
              <div className="bg-psychology-primary/5 border border-psychology-primary/20 rounded-xl p-6 mb-8 max-w-3xl mx-auto">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-psychology-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-psychology-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-psychology-primary mb-2">{t('home.adaptiveTitle')}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t('home.adaptiveDesc')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link to="/assessment?type=quick">
                  <Button size="lg" className="bg-psychology-primary hover:bg-psychology-primary/90 text-white px-8 py-4 text-lg">
                    <Zap className="w-5 h-5 mr-2" />
                    {t('home.startQuick')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>

                <Link to="/assessment?type=full">
                  <Button size="lg" variant="outline" className="border-psychology-primary text-psychology-primary hover:bg-psychology-primary hover:text-white transition-colors px-8 py-4 text-lg">
                    <Target className="w-5 h-5 mr-2" />
                    {t('home.startFull')}
                  </Button>
                </Link>
              </div>

              {/* 核心指标展示 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-psychology-primary/10 hover:shadow-lg transition-shadow">
                  <Clock className="w-8 h-8 text-psychology-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-psychology-primary">8-15</div>
                  <div className="text-sm text-muted-foreground">{t('home.minutesQuick')}</div>
                </div>

                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-psychology-secondary/10 hover:shadow-lg transition-shadow">
                  <BarChart3 className="w-8 h-8 text-psychology-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-psychology-secondary">4</div>
                  <div className="text-sm text-muted-foreground">{t('home.coreDimensions')}</div>
                </div>

                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-psychology-accent/10 hover:shadow-lg transition-shadow">
                  <Shield className="w-8 h-8 text-psychology-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-psychology-accent">100%</div>
                  <div className="text-sm text-muted-foreground">{t('home.privacyProtection')}</div>
                </div>

                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-psychology-success/10 hover:shadow-lg transition-shadow">
                  <Users className="w-8 h-8 text-psychology-success mx-auto mb-2" />
                  <div className="text-2xl font-bold text-psychology-success">{t('home.scientificValidation')}</div>
                  <div className="text-sm text-muted-foreground">{t('home.scientificValidationSub')}</div>
                </div>
              </div>
            </div>
          </section>

          {/* 测评版本选择 */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t('home.versionTitle')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('home.versionDesc')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* 快测版 */}
              <Card className="sri-card relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-psychology-primary text-white">{t('home.recommended')}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-psychology-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-psychology-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-psychology-primary">{t('home.quickVersion')}</CardTitle>
                      <p className="text-sm text-muted-foreground">{t('home.quickVersionDesc')}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">SIS/SES-SF 14</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Mosher 10</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">KISS-9</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">SOS</span>
                    </div>
                  </div>

                  <div className="bg-psychology-primary/5 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{t('home.estimatedTime')}</span>
                      <span className="text-sm text-psychology-primary font-bold">8-15 {t('home.minutes')}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{t('home.questionCount')}</span>
                      <span className="text-sm text-psychology-primary font-bold">33-42 {t('home.questions')}</span>
                    </div>
                  </div>

                  <Link to="/assessment?type=quick" className="block">
                    <Button className="w-full bg-psychology-primary hover:bg-psychology-primary/90 text-white">
                      {t('home.startQuick')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* 完整版 */}
              <Card className="sri-card relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-psychology-secondary/10 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-psychology-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-psychology-secondary">{t('home.fullVersion')}</CardTitle>
                      <p className="text-sm text-muted-foreground">{t('home.fullVersionDesc')}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">SIS/SES</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Mosher</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">KISS-9+</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">BSAS</span>
                    </div>
                  </div>

                  <div className="bg-psychology-secondary/5 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{t('home.estimatedTime')}</span>
                      <span className="text-sm text-psychology-secondary font-bold">25-40 {t('home.minutes')}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{t('home.questionCount')}</span>
                      <span className="text-sm text-psychology-secondary font-bold">58-126 {t('home.questions')}</span>
                    </div>
                  </div>

                  <Link to="/assessment?type=full" className="block">
                    <Button variant="outline" className="w-full border-psychology-secondary text-psychology-secondary hover:bg-psychology-secondary hover:text-white transition-colors">
                      {t('home.startFull')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 科学性说明 */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t('home.scientificBasis')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('home.scientificBasisDesc')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="sri-card text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{t('home.dualControl')}</h3>
                  <p className="text-sm text-muted-foreground">{t('home.dualControlDesc')}</p>
                </CardContent>
              </Card>

              <Card className="sri-card text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{t('home.sexualGuilt')}</h3>
                  <p className="text-sm text-muted-foreground">{t('home.sexualGuiltDesc')}</p>
                </CardContent>
              </Card>

              <Card className="sri-card text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{t('home.sexualShame')}</h3>
                  <p className="text-sm text-muted-foreground">{t('home.sexualShameDesc')}</p>
                </CardContent>
              </Card>

              <Card className="sri-card text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{t('home.sexualOpinion')}</h3>
                  <p className="text-sm text-muted-foreground">{t('home.sexualOpinionDesc')}</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 隐私保护承诺 */}
          <section className="mb-20">
            <Card className="sri-card border-psychology-primary/20 bg-psychology-primary/5 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Shield className="w-16 h-16 text-psychology-primary mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-psychology-primary mb-4">{t('home.privacyTitle')}</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                  {t('home.privacyDesc')}
                </p>
                <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{t('home.localStorage')}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{t('home.anonymized')}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{t('home.deletable')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA区域 */}
          <section className="text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">{t('home.ctaTitle')}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('home.ctaDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/assessment?type=quick">
                  <Button size="lg" className="bg-psychology-primary hover:bg-psychology-primary/90 text-white px-8 py-4">
                    <Zap className="w-5 h-5 mr-2" />
                    {t('home.startNow')}
                  </Button>
                </Link>
                <Button size="lg" variant="outline" asChild className="border-psychology-primary text-psychology-primary hover:bg-psychology-primary hover:text-white transition-colors px-8 py-4">
                  <Link to="/guide">
                    <BookOpen className="w-5 h-5 mr-2" />
                    {t('home.learnMore')}
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* 页脚 */}
        <footer className="border-t border-muted bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-6 h-6 text-psychology-primary" />
                  <span className="font-bold text-psychology-primary">{t('common.appSubtitle')}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('home.footerDesc')}
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">{t('home.assessmentTools')}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link to="/assessment?type=quick" className="hover:text-psychology-primary transition-colors">{t('common.quickAssessment')}</Link></li>
                  <li><Link to="/assessment?type=full" className="hover:text-psychology-primary transition-colors">{t('common.fullAssessment')}</Link></li>
                  <li><Link to="/history" className="hover:text-psychology-primary transition-colors">{t('nav.history')}</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">{t('home.resources')}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link to="/guide" className="hover:text-psychology-primary transition-colors">{t('nav.guide')}</Link></li>
                  <li><Link to="/science" className="hover:text-psychology-primary transition-colors">{t('nav.science')}</Link></li>
                  <li><a href="#" className="hover:text-psychology-primary transition-colors">{t('home.privacyPolicy')}</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">{t('home.support')}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-psychology-primary transition-colors">{t('home.faq')}</a></li>
                  <li><a href="#" className="hover:text-psychology-primary transition-colors">{t('home.professionalConsult')}</a></li>
                  <li><a href="#" className="hover:text-psychology-primary transition-colors">{t('home.crisisResources')}</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-muted mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>{t('home.copyright')}</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
