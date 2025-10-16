/**
 * 验证码对话框组件
 * 在用户开始测评前进行简单的文字验证
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Loader2, AlertCircle } from 'lucide-react';

interface CaptchaDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  assessmentType: 'quick' | 'full';
}

export function CaptchaDialog({ open, onOpenChange, assessmentType }: CaptchaDialogProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');

  // 从环境变量获取验证密码
  const captchaPassword = import.meta.env.VITE_CAPTCHA_PASSWORD || 'test123';

  const handleVerify = () => {
    setError('');
    setIsVerifying(true);

    // 验证输入的密码
    if (inputValue.trim() === captchaPassword) {
      console.log('验证成功');

      // 验证成功后跳转到评估页面
      setTimeout(() => {
        navigate(`/assessment?type=${assessmentType}`);
        onOpenChange(false);
        setIsVerifying(false);
        setInputValue('');
        setError('');
      }, 500);
    } else {
      // 验证失败
      setTimeout(() => {
        setError(t('captcha.error', '验证码错误，请重试'));
        setIsVerifying(false);
      }, 500);
    }
  };

  const handleClose = () => {
    if (!isVerifying) {
      onOpenChange(false);
      setInputValue('');
      setError('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim() && !isVerifying) {
      handleVerify();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-psychology-primary/10 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-psychology-primary" />
            </div>
          </div>
          <DialogTitle className="text-center text-xl">
            {t('captcha.title', '安全验证')}
          </DialogTitle>
          <DialogDescription className="text-center">
            {t('captcha.description', '为了防止滥用，请完成以下验证')}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center py-6 space-y-4">
          {isVerifying ? (
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 text-psychology-primary animate-spin" />
              <p className="text-sm text-muted-foreground">
                {t('captcha.verifying', '正在验证...')}
              </p>
            </div>
          ) : (
            <div className="w-full space-y-4">
              <div className="space-y-2">
                <label htmlFor="captcha-input" className="text-sm font-medium">
                  {t('captcha.inputLabel', '请输入验证码')}
                </label>
                <Input
                  id="captcha-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('captcha.inputPlaceholder', '输入验证码')}
                  className={error ? 'border-red-500' : ''}
                  autoFocus
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-sm text-red-500">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}

              <Button
                onClick={handleVerify}
                disabled={!inputValue.trim() || isVerifying}
                className="w-full bg-psychology-primary hover:bg-psychology-primary/90"
              >
                {t('captcha.verify', '验证')}
              </Button>
            </div>
          )}
        </div>

        <div className="text-center text-xs text-muted-foreground">
          {t('captcha.privacy', '我们重视您的隐私，验证信息不会被存储')}
        </div>
      </DialogContent>
    </Dialog>
  );
}
