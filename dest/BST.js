/*
 * Binary Search Tree implementation in JavaScript
 * Copyright (c) 2016 Techhysahil(http://techhysahil.com/)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

"use strict";

(function(exports){

    //Binnary Search Tree Constructor
	function BST(){
		this.root = null;
		this.tree = null;
	};

	BST.prototype = {

		//restore BST constructor
		constructor : BST,

		//Add a new element
		add : function(x){
			var flag = true,
				data = this.tree;

			if(this.root === null){
				this.tree = {
					element : x,
					leftchild : null,
					rightchild : null
				};
				this.root = x;
				flag = false;
			}else{
				while(flag){
					if(data.element === x){
						return false;
					}else if(x > data.element){
						if(data.rightchild === null){
							data.rightchild = {
								element : x,
								leftchild : null,
								rightchild : null		
							};
							flag = false;
						}else{
							data = data.rightchild;
						}
						
					}else if(x < data.element){
						if(data.leftchild === null){
							data.leftchild = {
								element : x,
								leftchild : null,
								rightchild : null		
							};
							flag = false;
						}else{
							data = data.leftchild;
						}
						
					}	
				}
				
			}
		},

		//Find whether element exist in exisiting BST
		contains : function(x){
			var flag = true,
				node = this.tree;

			while(flag){
				if(node != null){
					if(x === node.element){
						flag = false;
						return true;
					}else if(x > node.element){
						node = node.rightchildchild;
					}else if(x < node.element){
						node = node.leftchildchild;
					}	
				}else{
					return false;
				}
				
			}
		},

		//Find element in BST with minimum value
		minValue : function(){
			var flag = true,
				node = this.tree;

				if(node != null){
					while(flag){
						if(node.leftchildchild){
							node = node.leftchildchild;
						}else{
							flag = false;
							return node.element;
						}
					}
				}else{
					return false;
				}
		},

		//Find element in BST with maximum value
		maxValue : function(){
			var flag = true,
				node = this.tree;

				if(node != null){
					while(flag){
						if(node.rightchildchild){
							node = node.rightchildchild;
						}else{
							flag = false;
							return node.element;
						}
					}
				}else{
					return false;
				}
		},

		//Delete whole BST 
		removeTree : function(){
			this.root = null;
			this.tree = null;
		},

		//Traverse BST tree, you can traverse BST in inOrder,preOrder & postOrder fashion.
		traversalTree : function(options,callback){
			var obj = this.tree;

			//inOrder traversal
			if(options.type === "inorder"){
				function inOrder(obj){
			        if (obj){

			            if (obj.left !== null){
			                inOrder(obj.leftchild);
			            }            

			            callback.call(this,obj.element);

			            if (obj.right !== null){
			                inOrder(obj.rightchild);
			            }
			        }
			    }
		        //start with the root
		        this.inOrder1(obj,callback);
			}
			if(options.type === "preorder"){
				function preOrder(obj){
			        if (obj){

			        	callback.call(this,obj.element);

			            if (obj.left !== null){
			                preOrder(obj.leftchild);
			            }            

			            if (obj.right !== null){
			                preOrder(obj.rightchild);
			            }
			        }
			    }
		        //start with the root
		        preOrder(obj);
			}
			if(options.type === "postorder"){
				function postOrder(obj){
			        if (obj){

			            if (obj.left !== null){
			                postOrder(obj.leftchild);
			            }            

			            

			            if (obj.right !== null){
			                postOrder(obj.rightchild);
			            }

			            callback.call(this,obj.element);

			        }
			    }
		        //start with the root
		        postOrder(obj);
			}
		},

		//Get BST size 
		size : function(callback){
			var obj = this.tree;
			var size = 0;
			function inOrder(obj){
		        if (obj){

		            if (obj.left !== null){
		                inOrder(obj.leftchild);
		            }            

		            // callback.call(this,obj.element);
		            size = size+1;

		            if (obj.right !== null){
		                inOrder(obj.rightchild);
		            }
		        }
		    }
	        //start with the root
	        inOrder(obj);

	        return size;
		},

		//Convert BST tree to Array 
		toArray : function(){
			var obj = this.tree,
				arr = [];
			function inOrder(obj){
		        if (obj){

		            if (obj.left !== null){
		                inOrder(obj.leftchild);
		            }            

		            // callback.call(this,obj.element);
		            arr.push(obj.element);

		            if (obj.right !== null){
		                inOrder(obj.rightchild);
		            }
		        }
		    }
	        //start with the root
	        inOrder(obj);

	        return arr;
		},

		//Convert BST tree to String
		toString : function(){
			var obj = this.tree,
				arr = [];
			function inOrder(obj){
		        if (obj){

		            if (obj.left !== null){
		                inOrder(obj.leftchild);
		            }            

		            // callback.call(this,obj.element);
		            arr.push(obj.element);

		            if (obj.right !== null){
		                inOrder(obj.rightchild);
		            }
		        }
		    }
	        //start with the root
	        inOrder(obj);

	        return arr.toString();
		},

		//Check maximum Depth in BST
		maxDepth : function(){
			var obj = this.tree,
				size = 0,
				PathArr = [],
				traverseTopNode = false,
				root = this.root;

			function inOrder(obj){

		        if (obj){
		        	if (obj.leftchild !== null){
		        		size = size+1;
		                inOrder(obj.leftchild);
		            }else{
		            	PathArr.push(size);
		            }            

		            if(obj.element === root){
		        		traverseTopNode = true;
		        		size = 1;
		        	}
		            if (obj.rightchild !== null){
		                size = size+1;
		                inOrder(obj.rightchild);

		            }else{
		            	PathArr.push(size);
		            	size = size -1;
		            }

		        }else{
		        	return 0;
		        }
		    }

	        //start with the root
	        inOrder(obj);

	        PathArr.sort();
	        PathArr.reverse();
	        return PathArr[0];
		},

		//Remove element in BST
		remove : function(value){
	    
	        var found       = false,
	            parent      = null,
	            node     = this.tree,
	            childCount,
	            replacement,
	            replacementParent;
	            
	        //make sure there's a node to search
	        while(!found && node){
	        
	            //if the value is less than the node node's, go left
	            if (value < node.element){
	                parent = node;
	                node = node.leftchild;
	                
	            //if the value is greater than the node node's, go right
	            } else if (value > node.element){
	                parent = node;
	                node = node.rightchild;
	                
	            //values are equal, found it!
	            } else {
	                found = true;
	            }
	        }
	        
	        //only proceed if the node was found
	        if (found){
	        
	            //figure out how many children
	            childCount = (node.leftchild !== null ? 1 : 0) + (node.rightchild !== null ? 1 : 0);
	        
	            //special case: the value is at the root
	            if (node === this.tree){
	                switch(childCount){
	                
	                    //no children, just erase the root
	                    case 0:
	                        this.tree = null;
	                        this.root = null;
	                        break;
	                        
	                    //one child, use one as the root
	                    case 1:
	                        this.tree = (node.rightchild === null ? node.leftchild : node.rightchild);
	                        break;
	                        
	                    //two children, little work to do
	                    case 2:

	                        //new root will be the old root's left child...maybe
	                        replacement = this.tree.leftchild;
	                        
	                        //find the right-most leaf node to be the real new root
	                        while (replacement.rightchild !== null){
	                            replacementParent = replacement;
	                            replacement = replacement.rightchild;
	                        }
	         
	                        //it's not the first node on the left
	                        if (replacementParent !== null){
	                        
	                            //remove the new root from it's previous position
	                            replacementParent.rightchild = replacement.leftchild;
	                            
	                            //give the new root all of the old root's children
	                            replacement.rightchild = this.tree.rightchild;
	                            replacement.leftchild = this.tree.leftchild;
	                        } else {
	                        
	                            //just assign the children
	                            replacement.rightchild = this.tree.rightchild;
	                        }
	                        
	                        //officially assign new root
	                        this.tree = replacement;
	                        this.root = replacement.element;
	                    
	                    //no default
	                
	                }        

	            //non-root values
	            } else {
	            
	                switch (childCount){
	                
	                    //no children, just remove it from the parent
	                    case 0:
	                        //if the node value is less than its parent's, null out the left pointer
	                        if (node.element < parent.element){
	                            parent.leftchild = null;
	                            
	                        //if the node value is greater than its parent's, null out the right pointer
	                        } else {
	                            parent.rightchild = null;
	                        }
	                        break;
	                        
	                    //one child, just reassign to parent
	                    case 1:
	                        //if the node value is less than its parent's, reset the left pointer
	                        if (node.element < parent.element){
	                            parent.leftchild = (node.leftchild === null ? node.rightchild : node.leftchild);
	                            
	                        //if the node value is greater than its parent's, reset the right pointer
	                        } else {
	                            parent.rightchild = (node.leftchild === null ? node.rightchild : node.leftchild);
	                        }
	                        break;    

	                    //two children, a bit more complicated
	                    case 2:
	                    
	                        //reset pointers for new traversal
	                        replacement = node.leftchild;
	                        replacementParent = node;
	                        
	                        //find the right-most node
	                        while(replacement.rightchild !== null){
	                            replacementParent = replacement;
	                            replacement = replacement.rightchild;                            
	                        }
	                    
	                        if (replacementParent.rightchild === replacement) {
	                             replacementParent.rightchild = replacement.leftchild;
	                         } else { 
	                             //replacement will be on the left when the left most subtree
	                             //of the node to remove has no children to the right
	                             replacementParent.leftchild = replacement.leftchild;
	                         }
	                        
	                        //assign children to the replacement
	                        replacement.rightchild = node.rightchild;
	                        replacement.leftchild = node.leftchild;
	                        
	                        //place the replacement in the right spot
	                        if (node.element < parent.element){
	                            parent.leftchild = replacement;
	                        } else {
	                            parent.rightchild = replacement;
	                        }                        
	                }
	            
	            }
	        
	        }   
	    }

	};
	
	exports.BST = BST;

})(typeof exports === 'undefined'? window: exports);
	
