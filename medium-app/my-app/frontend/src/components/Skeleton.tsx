import { Circle } from "./Blogcard";

export const Skeleton = () => {
	return (
		<div>
			<div role="status" className="w-full animate-pulse">
				<div className="border-b p-4 border-slate-300 w-full pb-4 cursor-pointer">
					<div className="flex">
						<div className="h-6 w-6 bg-gray-200 rounded-full mb-4"></div>
						<div className="flex flex-col justify-center">
                            <div className="ml-4 h-3 w-10 bg-gray-200 rounded-full   mb-2.5"></div>
                        </div>
						<div className="flex justify-center flex-col pl-2 mt-1">
							<Circle />
						</div>
                        <div className="flex flex-col justify-center">
    						<div className="ml-4 h-3 w-10 bg-gray-200 rounded-full   mb-2.5"></div>
                        </div>
					</div>
					<div className="text-xl pt-2 font-semibold">
						<div className="h-8 bg-gray-200 rounded-lg   mb-2.5"></div>
					</div>
					<div className="text-md font-thin">
						<div className="h-3 bg-gray-200 rounded-full   mb-2.5"></div>
					</div>
					<div className="text-slate-500 font-thin pt-4 text-sm">
						<div className="h-3 bg-gray-200 rounded-full   mb-2.5"></div>
					</div>
				</div>
			</div>
		</div>
	);
};
