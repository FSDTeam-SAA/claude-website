"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface UserTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUserTypeSelect: (type: "player" | "gk") => void;
}

const UserTypeModal = ({ isOpen, onClose, onUserTypeSelect }: UserTypeModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Select Your Role
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          <p className="text-center text-gray-600 mb-6">
            Please select your role to continue with Google signup
          </p>
          
          <div className="space-y-4">
            <button
              onClick={() => onUserTypeSelect("player")}
              className="w-full p-6 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all flex flex-col items-center"
            >
              <div className="text-3xl mb-2">⚽</div>
              <h3 className="text-lg font-semibold">Player</h3>
              <p className="text-sm text-gray-500 mt-1">
                Sign up as a field player
              </p>
            </button>
            
            <button
              onClick={() => onUserTypeSelect("gk")}
              className="w-full p-6 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all flex flex-col items-center"
            >
              <div className="text-3xl mb-2">🧤</div>
              <h3 className="text-lg font-semibold">Goalkeeper</h3>
              <p className="text-sm text-gray-500 mt-1">
                Sign up as a goalkeeper
              </p>
            </button>
          </div>
          
          <div className="mt-6">
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserTypeModal;

