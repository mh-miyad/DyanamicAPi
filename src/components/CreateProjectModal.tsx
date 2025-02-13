import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from './ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Label } from './ui/label';
import { Button } from './ui/button';

interface CreateProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateProjectModal({ open, onOpenChange }: CreateProjectModalProps) {
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    framework: '',
    auth: '',
    language: '',
  });

  const handleCreate = () => {
    setIsCreating(true);
    // Simulate project creation
    setTimeout(() => {
      setIsCreating(false);
      onOpenChange(false);
    }, 10000);
  };

  if (isCreating) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-10">
            <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
            <h3 className="text-lg font-semibold">Creating Your Project</h3>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Please wait while we set up your project with the selected configuration...
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Project Name</Label>
            <input
              id="name"
              type="text"
              placeholder="my-awesome-api"
              className="w-full px-3 py-2 bg-background border border-input rounded-md"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Framework</Label>
            <Select
              value={formData.framework}
              onValueChange={(value) => setFormData({ ...formData, framework: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="express">Express.js</SelectItem>
                <SelectItem value="nest">Nest.js</SelectItem>
                <SelectItem value="hono">Hono</SelectItem>
                <SelectItem value="fastify">Fastify</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Authentication</Label>
            <Select
              value={formData.auth}
              onValueChange={(value) => setFormData({ ...formData, auth: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select authentication" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="firebase">Firebase Auth</SelectItem>
                <SelectItem value="custom">Custom Auth</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Language</Label>
            <Select
              value={formData.language}
              onValueChange={(value) => setFormData({ ...formData, language: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="typescript">TypeScript</SelectItem>
                <SelectItem value="javascript">JavaScript</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleCreate}
            disabled={!formData.name || !formData.framework || !formData.auth || !formData.language}
          >
            Create Project
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}