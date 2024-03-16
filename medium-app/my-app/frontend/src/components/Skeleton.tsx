import { Circle } from "./Blogcard";

export const Skeleton = () => {
	return (
		<div className="bg-green-800">
			<div role="status" className="w-full bg-red-800 animate-pulse">
				<div className="border-b p-4 border-slate-300 w-full pb-4 cursor-pointer">
					<div className="flex">
						<div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
						<div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
						<div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
						<div className="flex justify-center flex-col pl-2 mt-1">
							<Circle />
						</div>
						<div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
					</div>
					<div className="text-xl pt-2 font-semibold">
						<div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
					</div>
					<div className="text-md font-thin">
						<div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
					</div>
					<div className="text-slate-500 font-thin pt-4 text-sm">
						<div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
					</div>
				</div>
			</div>
		</div>
	);
};
