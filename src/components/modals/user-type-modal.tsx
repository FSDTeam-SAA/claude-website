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
    <div className="">
      <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white !rounded-[12px] border-none ">
        <DialogHeader>
          <DialogTitle className="text-center text-xl text-green-700">
            Select Your Role
          </DialogTitle>
        </DialogHeader>
        
        <div className="pb-4">
          <p className="text-center text-[#131313] mb-4">
            Please select your role to continue with Google signup
          </p>
          
          <div className="space-y-4">
            <button
              onClick={() => onUserTypeSelect("player")}
              className="w-full p-6 border-2 border-[#424242] rounded-[12px] hover:border-primary hover:bg-primary/5 transition-all flex flex-col items-center"
            >
              <div className="text-3xl mb-2">⚽</div>
              <h3 className="text-lg font-semibold text-green-700">Player</h3>
              <p className="text-sm text-[#424242] mt-1">
                Sign up as a field player
              </p>
            </button>
            
            <button
              onClick={() => onUserTypeSelect("gk")}
              className="w-full p-6 border-2 border-[#424242] rounded-[12px] hover:border-primary hover:bg-primary/5 transition-all flex flex-col items-center"
            >
              <div className="text-3xl mb-2">🧤</div>
              <h3 className="text-lg font-semibold text-green-700">Goalkeeper</h3>
              <p className="text-sm text-[#424242] mt-1">
                Sign up as a goalkeeper
              </p>
            </button>
          </div>
          
          <div className="mt-6">
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full border border-[#424242] text-green-700 rounded-[12px]"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </div>
  );
};

export default UserTypeModal;

